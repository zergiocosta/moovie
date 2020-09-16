import React from 'react'
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet
} from 'react-native'

interface Props {
  main: string
  thumb: string
  width: number | string
  aspectRatio: number
}

const ImageWithEffect: React.FC<Props> = (props: Props) => {
  const {main, thumb, width, aspectRatio} = props

  return (
    <SafeAreaView>
    <ImageBackground
      style={[styles.cardImage, {
        aspectRatio: aspectRatio,
        width: width
      }]}
      source={{
        uri: thumb,
      }}
      blurRadius={7}
    >
      <Image
        style={[styles.cardImage, {
          aspectRatio: aspectRatio,
          width: width
        }]}
        source={{
          uri: main,
        }}
      />
    </ImageBackground>
    </SafeAreaView>
  )
}

export default ImageWithEffect

const styles = StyleSheet.create({
  cardImage: {
    width: '100%',
    resizeMode: 'contain'
  }
})
