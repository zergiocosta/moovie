import * as React from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { AxiosError } from 'axios'

import { MovieModel } from '../../interfaces/MovieModel'
import { ApiResponse } from '../../interfaces/ApiResponseModel'
import CardMovie from '../../components/CardMovie'
import MovieService from '../../services/movie.service'

import { StyledFlatList } from './styles'

interface Props {
  navigation: any
}

interface State {
  isLoading: boolean
  page: number
  totalPages: number
  movies?: MovieModel[]
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

    this.renderItem = this.renderItem.bind(this)
    this.refreshFeed = this.refreshFeed.bind(this)
    this.handleScrolling = this.handleScrolling.bind(this)
  }

  componentDidMount() {
    this.getMovies()
  }

  /**
   * it fetches the upcoming movies within the specified page
   * and sets the state based on whether it's in the first, the last or the in-between pages
   */
  private async getMovies(page: number = 1): Promise<void> {
    await MovieService.getUpcomingMovies({page: page}).then(
      (response: ApiResponse) => {
        let movies: MovieModel[] = []
        if (page === 1 && response.data?.results) movies = response.data.results
        if (page > 1 && response.data?.results) {
          movies = (this.state.movies) ?
                    this.state.movies?.concat(response.data.results) :
                    response.data.results
        }
        this.setState({
          isLoading: false,
          page: page,
          totalPages: (response.data?.total_pages) ? response.data.total_pages : this.state.totalPages,
          movies: movies
        })
      }
    ).catch(
      (error: AxiosError) => {
        this.setState({
          isLoading: false,
          movies: this.state.movies
        })
      }
    )
  }

  private goToMovie(movie: MovieModel): void {
    this.props.navigation.navigate('Single', { movie: movie })
  }

  private refreshFeed(): void {
    this.getMovies()
  }

  private handleScrolling(): void {
    // if (!this.state.isLoading) {
      this.setState({isLoading: true})
      this.getMovies(this.state.page+1)
    // }
  }

  private renderItem(movie: MovieModel) {
    return (
      <RectButton
        underlayColor="#EEEEEE"
        onPress={() => this.goToMovie(movie)}>
        <CardMovie
          movie={movie}
        />
      </RectButton>
    )
  }

  render(): Element {
    let {isLoading, movies} = this.state

    return (
      <StyledFlatList
        data={movies}
        renderItem={(item: any) => this.renderItem(item.item)}
        keyExtractor={(item: any) => item.id}
        onEndReached={() => this.handleScrolling()}
        onEndReachedThreshold={400}
        refreshing={isLoading}
        onRefresh={() => this.refreshFeed()}
      />
    )
  }
}

export default Feed
