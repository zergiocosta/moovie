import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { MovieModel } from '../interfaces/MovieModel'

interface Props {
  movie: MovieModel
}

const CardMovie: React.FC<Props> = (props: Props) => {

  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        style={styles.cardImage}
        source={{
          uri: 'https://image.tmdb.org/t/p/w92/uGhQ2ZGBpzCj6wC5jUrybsZuPTI.jpg',
        }}
        blurRadius={2}
      >
        <Image 
          style={styles.cardImage}
          source={{
            uri: 'https://image.tmdb.org/t/p/w500/uGhQ2ZGBpzCj6wC5jUrybsZuPTI.jpg',
          }}
        />
      </ImageBackground>
      <Text style={styles.movieName} key={props.movie.id}>{props.movie.title}</Text>
    </View>
  )
}

export default CardMovie

const styles = StyleSheet.create({
  movieName: {
    height: 30
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 40
  },
  cardImage: {
    width: 150,
    resizeMode: 'contain',
    aspectRatio: 0.69
  }
})