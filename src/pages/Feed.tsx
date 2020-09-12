import * as React from 'react'
import {
  Button,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  NativeScrollEvent
} from 'react-native'
import { AxiosError } from 'axios'

import { MovieModel } from '../interfaces/MovieModel'
import { ApiResponse } from '../interfaces/ApiResponseModel'
import CardMovie from '../components/CardMovie'
import MovieService from '../services/movie.service'

interface Props {
  navigation: any
}

interface State {
  isLoading: boolean
  page: number
  totalPages: number
  movies: MovieModel[] | undefined
}

class Feed extends React.Component<Props, State> {

  constructor(props: Readonly<Props>) {
    super(props)
    this.state = {
      isLoading: true,
      page: 0,
      totalPages: 0,
      movies: []
    }

    this.refreshFeed = this.refreshFeed.bind(this)
    this.handleScrolling = this.handleScrolling.bind(this)
  }

  componentDidMount() {
    this.getMovies()
  }

  private async getMovies(page: number = 1): Promise<void> {
    await MovieService.getUpcomingMovies({page: page}).then(
      (response: ApiResponse) => {
        let movies: MovieModel[] = []
        if (page === 1 && response.data.results) movies = response.data.results
        if (page > 1 && response.data.results) {
          movies = (this.state.movies) ? 
                    this.state.movies?.concat(response.data.results) : 
                    response.data.results
        }
        this.setState({
          isLoading: false,
          page: page,
          totalPages: (response.data.total_pages) ? response.data.total_pages : this.state.totalPages,
          movies: movies
        })
      }
    ).catch(
      (error: AxiosError) => {
        this.setState({
          isLoading: false,
          movies: []
        })
      }
    )
  }

  private goToMovie(movieId: number): void {
    this.props.navigation.navigate('Single', { movieId: movieId })
  }

  private refreshFeed(): void {
    this.getMovies()
  }

  private handleScrolling(nativeEvent: NativeScrollEvent): void {
    if (this.isCloseToBottom(nativeEvent) && this.state.page < this.state.totalPages) {
      this.getMovies(this.state.page+1)
    }
  }

  private isCloseToBottom(nativeElement: NativeScrollEvent): boolean {
    const { layoutMeasurement, contentOffset, contentSize } = nativeElement
    const paddingToBottom = 20
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
  }

  render() {
    let {isLoading, movies} = this.state
    
    return (
      <ScrollView
        onScroll={({nativeEvent}) => this.handleScrolling(nativeEvent)}
        scrollEventThrottle={400}
        refreshControl={
          <RefreshControl 
            refreshing={isLoading}
            onRefresh={this.refreshFeed}
          />
        }
      >
        <View>
          {movies?.map((movie: MovieModel, index: number) => {
            return (
              <TouchableOpacity 
                key={movie.id}
                onPress={() => this.goToMovie(movie.id)}>
                <CardMovie
                  movie={movie}
                />
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    )
  }
}

export default Feed