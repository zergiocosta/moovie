import * as React from 'react'
import { Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AxiosError } from 'axios'

import { MovieModel } from '../../interfaces/MovieModel'
import { ApiResponse } from '../../interfaces/ApiResponseModel'
import MovieService from '../../services/MovieService'
import CardMovie from '../../components/CardMovie/CardMovie'
import FadeInUpAnim from '../../components/FadeInUpAnim/FadeInUpAnim'

import {
  StyledTitle,
  StyledFlatList,
  StyledLoadMore
} from './styles'

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
    this.renderListFooter = this.renderListFooter.bind(this)
    this.refreshFeed = this.refreshFeed.bind(this)
    this.handleLoadMore = this.handleLoadMore.bind(this)
  }

  componentDidMount = () => {
    this.getMovies()
  }

  /**
   * it fetches the upcoming movies within the specified page number
   * and sets the state based on whether it's in the first, the last or the in-between pages
   */
  private getMovies = async (page: number = 1): Promise<void> => {
    this.setState({isLoading: true})
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

  private goToMovie = (movie: MovieModel): void => {
    this.props.navigation.navigate('Single', { movie: movie })
  }

  private refreshFeed = (): void => {
    if (!this.state.isLoading) {
      this.getMovies()
    }
  }

  private handleLoadMore = (): void => {
    if (!this.state.isLoading) {
      this.getMovies(this.state.page+1)
    }
  }

  private renderItem = (movie: MovieModel) => {
    return (
      <TouchableOpacity
        onPress={() => this.goToMovie(movie)}
      >
        <FadeInUpAnim>
          <CardMovie
            movie={movie}
          />
        </FadeInUpAnim>
      </TouchableOpacity>
    )
  }

  private renderListFooter = () => {
    return (
      <StyledLoadMore>
        <Button
          title="Load more..."
          color="#333"
          onPress={this.handleLoadMore}
        />
      </StyledLoadMore>
    )
  }

  render = (): Element => {
    const {isLoading, movies} = this.state

    return (
      <>
        <StyledTitle>Upcoming</StyledTitle>
        <StyledFlatList
          data={movies}
          renderItem={(item: any) => this.renderItem(item.item)}
          keyExtractor={(item: any) => item.id.toString()}
          refreshing={isLoading}
          onRefresh={() => this.refreshFeed()}
          // these next are needed to a better controll of 'onEndReached'
          ListFooterComponent={() => this.renderListFooter()}
          onMomentumScrollBegin={() => { this.setState({isLoading: false}) }}
          scrollEnabled={!isLoading}
        />
      </>
    )
  }
}

export default Feed
