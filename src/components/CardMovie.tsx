import { faCalendarCheck, faGlobeAmericas, faStar } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import StorageHelper from '../helpers/StorageHelper'
import { MovieModel } from '../interfaces/MovieModel'
import CardMovieInfo from './CardMovieInfo'
import { ImageConfigurationModel } from '../interfaces/ImageConfigurationModel'
import ImageWithEffect from './ImageWithEffect'

interface Props {
  movie: MovieModel
}

const CardMovie: React.FC<Props> = (props: Props) => {

  const POSTER_ASPECT_RATIO: number = 0.69

  const [baseUrl, setBaseUrl] = useState('')
  const [imageSize, setImageSize] = useState('')
  const [thumbSize, setThumbSize] = useState('')

  useEffect(() => {
    StorageHelper.getObject('imageConfig').then(
      (response: ImageConfigurationModel) => {
        if (response.images?.base_url) {
          setBaseUrl(response.images?.base_url)
          setImageSize(response.images?.poster_sizes[5])
          setThumbSize(response.images?.poster_sizes[0])
        }
      }
    )
    return () => {
      
    }
  })

  return (
    <View style={styles.cardContainer}>
      <ImageWithEffect
        main={`${baseUrl}/${imageSize}/${props.movie.poster_path}`}
        thumb={`${baseUrl}/${thumbSize}/${props.movie.poster_path}`}
        aspectRatio={POSTER_ASPECT_RATIO}
      />
      <View style={styles.cardInfo}>
        <Text 
          style={styles.movieName} 
          key={props.movie.id}
        >
          {props.movie.title}
        </Text>
        <CardMovieInfo
          icon={faCalendarCheck}
          date={props.movie.release_date} 
        />
        <CardMovieInfo
          icon={faGlobeAmericas}
          text={`Language: ${props.movie.original_language}`}
        />
        <CardMovieInfo
          icon={faStar}
          text={props.movie.vote_average} 
        />
      </View>
    </View>
  )
}

export default CardMovie

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#111',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 24,
    marginBottom: 12,
    marginTop: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12
  },
  cardImage: {
    width: 120,
    resizeMode: 'contain',
    aspectRatio: 0.69
  },
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