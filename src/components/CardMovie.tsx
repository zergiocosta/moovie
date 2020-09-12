import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { MovieModel } from '../interfaces/MovieModel'

interface Props {
  movie: MovieModel
}

const CardMovie: React.FC<Props> = (props: Props) => {

  return (
    <Text style={styles.movieName} key={props.movie.id}>{props.movie.title}</Text>
  )
}

export default CardMovie

const styles = StyleSheet.create({
  movieName: {
    height: 100
  }
})