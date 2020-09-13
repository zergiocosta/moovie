import React from 'react'
import { Button, View, Text } from 'react-native'

import { MovieModel } from '../interfaces/MovieModel'
import MovieService from '../services/movie.service'
import { ApiResponse } from '../interfaces/ApiResponseModel'

interface Props {
  navigation: any
  route: any
  movie: MovieModel
}

interface State {
  movie: MovieModel
}

class Single extends React.Component<Props, State> {

  constructor(props: Readonly<Props>) {
    super(props)
    this.state = {
      movie: props.movie
    }
  }
  
  componentDidMount() {
    const movieId: number = this.props.route.params.movie.id
    this.getMovieById(movieId)
  }

  private async getMovieById(movieId: number): Promise<void> {
    MovieService.getMovieById(movieId).then(
      (response: ApiResponse) => {
        this.setState({
          movie: response.data as MovieModel
        })
      }
    )
  }

  private goToMovie(movie: MovieModel): void {
    this.props.navigation.navigate('Single', { movie: movie })
  }
  
  render() {
    const movie = this.state.movie
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{movie?.title}</Text>
        <Button
          title="Go to Single again"
          onPress={() => this.goToMovie(this.state.movie)}
        />
        <Button title="Go to Feed" onPress={() => this.props.navigation.navigate('Feed')} />
        <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
      </View>
    )
  }
}

export default Single