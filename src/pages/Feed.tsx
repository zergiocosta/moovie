import * as React from 'react'
import { Button, View, Text, ActivityIndicator, ScrollView } from 'react-native'

import { MovieModel } from '../interfaces/MovieModel'
import { ApiResponse } from '../interfaces/ApiResponse'
import MovieService from '../services/movie.service'

interface Props {
  navigation: any
}

interface State {
  isLoading: boolean
  movies: MovieModel[] | undefined
}

class Feed extends React.Component<Props, State> {

  constructor(props: Readonly<Props>) {
    super(props)
    this.state = {
      isLoading: true,
      movies: []
    }
  }

  componentDidMount() {
    this.getMovies()
  }

  private async getMovies(): Promise<void> {
    await MovieService.getUpcomingMovies().then(
      (response: ApiResponse) => {
        this.setState({
          isLoading: false,
          movies: response.data.results
        })
      }
    ).catch(
      err => console.log(err)
    )
  }

  render() {
    let {isLoading, movies} = this.state

    if ( !isLoading ) {
      return (
        <ScrollView>
          <View>
            {movies?.map((movie: MovieModel, index: number) => {
              console.log('map', movie)
              return <Text key={movie.id}>{movie.title} - {index}</Text>
            })}
          </View>
          <Button
            title="Go to Single"
            onPress={() => this.props.navigation.navigate('Single')}
          />
        </ScrollView>
      )
    } else {
      return (
        <View>
          <ActivityIndicator/>
        </View>
      )
    }
  }
}

export default Feed