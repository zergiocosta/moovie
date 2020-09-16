
import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

import StorageHelper from '../../helpers/StorageHelper'
import { ImageConfigurationModel } from '../../interfaces/ImageConfigurationModel'
import { MovieModel } from '../../interfaces/MovieModel'
import ImageWithEffect from './../ImageWithEffect/ImageWithEffect'
import { StyledTitle } from './styles'

interface Props {
  movie: MovieModel
}

const SingleHeading: React.FC<Props> = (props: Props) => {
  const POSTER_ASPECT_RATIO: number = 1.8
  const POSTER_CARD_WIDTH: string = '100%'

  const [baseUrl, setBaseUrl] = useState('')
  const [imageSize, setImageSize] = useState('')
  const [thumbSize, setThumbSize] = useState('')

  useEffect(() => {
    StorageHelper.getObject('imageConfig').then(
      (response: ImageConfigurationModel) => {
        if (response.images?.base_url) {
          setBaseUrl(response.images?.base_url)
          setImageSize(response.images?.backdrop_sizes[2])
          setThumbSize(response.images?.backdrop_sizes[0])
        }
      }
    )
  })

  return (
    <View>
      <ImageWithEffect
        main={`${baseUrl}/${imageSize}/${props.movie?.backdrop_path}`}
        thumb={`${baseUrl}/${thumbSize}/${props.movie?.backdrop_path}`}
        width={POSTER_CARD_WIDTH}
        aspectRatio={POSTER_ASPECT_RATIO}
      />
      <StyledTitle>{props.movie?.title}</StyledTitle>
    </View>
  )
}

export default SingleHeading
