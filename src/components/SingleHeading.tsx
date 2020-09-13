
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'

import StorageHelper from '../helpers/StorageHelper'
import { ImageConfigurationModel } from '../interfaces/ImageConfigurationModel'
import { MovieModel } from '../interfaces/MovieModel'
import ImageWithEffect from './ImageWithEffect'

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
    console.log(props.movie)
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
      <Text style={styles.singleTitle}>{props.movie?.title}</Text>
    </View>
  )
}

export default SingleHeading

const styles = StyleSheet.create({
  singleTitle: {
    fontSize: 24,
    position: 'absolute',
    bottom: 0,
    color: '#eee',
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '100%'
  }
})