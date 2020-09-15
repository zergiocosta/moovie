import { faCalendarCheck, faGlobeAmericas, faStar } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import StorageHelper from '../../helpers/StorageHelper'
import { MovieModel } from '../../interfaces/MovieModel'
import { ImageConfigurationModel } from '../../interfaces/ImageConfigurationModel'
import CardMovieInfo from './../CardMovieInfo/CardMovieInfo'
import ImageWithEffect from './../ImageWithEffect/ImageWithEffect'

import {
  StyledCardContainer
} from './styles'

interface Props {
  movie: MovieModel
}

const CardMovie: React.FC<Props> = (props: Props) => {

  const POSTER_ASPECT_RATIO: number = 0.69
  const POSTER_CARD_WIDTH: number = 120

  const [baseUrl, setBaseUrl] = useState('')
  const [imageSize, setImageSize] = useState('')
  const [thumbSize, setThumbSize] = useState('')

  useEffect(() => {
    let isMounted: boolean = true
    StorageHelper.getObject('imageConfig').then(
      (response: ImageConfigurationModel) => {
        if (isMounted && response.images?.base_url) {
          setBaseUrl(response.images?.base_url)
          setImageSize(response.images?.poster_sizes[5])
          setThumbSize(response.images?.poster_sizes[0])
        }
      }
    )
    return () => { isMounted = false }
  })

  return (
    <StyledCardContainer>
      <ImageWithEffect
        main={`${baseUrl}/${imageSize}/${props.movie?.poster_path}`}
        thumb={`${baseUrl}/${thumbSize}/${props.movie?.poster_path}`}
        width={POSTER_CARD_WIDTH}
        aspectRatio={POSTER_ASPECT_RATIO}
      />
      <View style={styles.cardInfo}>
        <Text
          style={styles.movieName}
        >
          {props.movie?.title}
        </Text>
        <CardMovieInfo
          icon={faCalendarCheck}
          date={props.movie?.release_date}
        />
        <CardMovieInfo
          icon={faGlobeAmericas}
          text={`Language: ${props.movie?.original_language}`}
        />
        <CardMovieInfo
          icon={faStar}
          text={props.movie?.vote_average}
        />
      </View>
    </StyledCardContainer>
  )
}

export default CardMovie

const styles = StyleSheet.create({
  cardInfo: {
    padding: 24
  },
  movieName: {
    color: '#eee',
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
    fontSize: 24
  }
})
