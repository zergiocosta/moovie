import { faCalendarCheck, faChartLine, faStar } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react'

import StorageHelper from '../../helpers/StorageHelper'
import { MovieModel } from '../../interfaces/MovieModel'
import { ImageConfigurationModel } from '../../interfaces/ImageConfigurationModel'
import CardMovieInfo from './../CardMovieInfo/CardMovieInfo'
import ImageWithEffect from './../ImageWithEffect/ImageWithEffect'

import {
  StyledCardMovieName,
  StyledCardContainer,
  StyledCardInfo
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
    StorageHelper.getObject('imageConfig').then(
      (response: ImageConfigurationModel) => {
        if (response.images?.base_url) {
          setBaseUrl(response.images?.base_url)
          setImageSize(response.images?.poster_sizes[5])
          setThumbSize(response.images?.poster_sizes[0])
        }
      }
    )
  })

  return (
    <StyledCardContainer>
      <ImageWithEffect
        main={`${baseUrl}/${imageSize}/${props.movie?.poster_path}`}
        thumb={`${baseUrl}/${thumbSize}/${props.movie?.poster_path}`}
        width={POSTER_CARD_WIDTH}
        aspectRatio={POSTER_ASPECT_RATIO}
      />
      <StyledCardInfo>
        <StyledCardMovieName>
          {props.movie?.title}
        </StyledCardMovieName>
        <CardMovieInfo
          icon={faCalendarCheck}
          date={props.movie?.release_date}
        />
        <CardMovieInfo
          icon={faChartLine}
          text={'Total votes: '+props.movie?.vote_count}
        />
        <CardMovieInfo
          icon={faStar}
          text={(props.movie?.vote_average) && 'Score: '+props.movie?.vote_average}
        />
      </StyledCardInfo>
    </StyledCardContainer>
  )
}

export default CardMovie
