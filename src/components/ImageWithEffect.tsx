import React from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { ImageBackground } from 'react-native'
import { View } from 'react-native'

interface Props {
  main: string
  thumb: string
  aspectRatio: number
}

const ImageWithEffect: React.FC<Props> = (props: Props) => {
  const {main, thumb, aspectRatio} = props
  return (
    <ImageBackground
      style={[styles.cardImage, {aspectRatio: aspectRatio}]}
      source={{
        uri: thumb,
      }}
      blurRadius={7}
    >
      <Image 
        style={[styles.cardImage, {aspectRatio: aspectRatio}]}
        source={{
          uri: main,
        }}
      />
    </ImageBackground>
  )
}

export default ImageWithEffect

const styles = StyleSheet.create({
  cardImage: {
    width: 120,
    resizeMode: 'contain'
  }
})