import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {
  faChartLine,
  faGlobeAmericas,
  faStar,
  faTags
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import DateHelper from '../../helpers/DateHelper'
import { MovieModel } from '../../interfaces/MovieModel'
import { ApiResponse } from '../../interfaces/ApiResponseModel'
import MovieService from '../../services/movie.service'
import SingleHeading from '../../components/SingleHeading/SingleHeading'
import Tag from '../../components/Tag/Tag'

import {
  StyledGenresWrapper,
  StyledLabel,
  StyledSquaresWrapper,
  StyledSquareItem,
  StyledSquareItemBordered,
  StyledSquareText,
  StyledContentText,
  StyledContentTagline,
  StyledSingleInfoWrapper
} from './styles'

interface Props {
  navigation: any
  route: any
  params: any
}

interface State {
  movie?: MovieModel
  release_date: string
  isLoading: boolean
}

class Single extends React.Component<Props, State> {

  constructor(props: Readonly<Props>) {
    super(props)
    this.setInitialState(props.route.params.movie)
  }

  private setInitialState = (movie: MovieModel): void => {
    this.state = {
      movie: movie,
      release_date: DateHelper.apiDateToHumanReadableFormat(movie.release_date),
      isLoading: true
    }
  }

  componentDidMount = () => {
    const movieId: number = this.props.route.params.movie.id
    this.getMovieById(movieId)
  }

  private getMovieById = async (movieId: number): Promise<void> => {
    MovieService.getMovieById(movieId).then(
      (response: ApiResponse) => {
        this.setState({
          movie: response.data as MovieModel,
          isLoading: false
        }, () => console.log('ignore'))
      }
    )
  }

  render = (): Element => {
    return (
      <ScrollView>
        <SingleHeading movie={this.state.movie!} />

          <StyledSquaresWrapper>
            <StyledSquareItem>
              {!!this.state.movie?.production_countries &&
                <View>
                  <FontAwesomeIcon
                    style={{color: '#eee'}}
                    icon={faGlobeAmericas}
                  />
                  <StyledSquareText>{this.state.movie?.production_countries[0]?.iso_3166_1}</StyledSquareText>
                </View>
              }
            </StyledSquareItem>
            <StyledSquareItemBordered>
              <FontAwesomeIcon
                style={{color: '#eee'}}
                icon={faChartLine}
              />
              <StyledSquareText>{this.state.movie?.vote_count}</StyledSquareText>
            </StyledSquareItemBordered>
            <StyledSquareItem>
              <FontAwesomeIcon
                style={{color: '#eee'}}
                icon={faStar}
              />
              <StyledSquareText>{this.state.movie?.vote_average}</StyledSquareText>
            </StyledSquareItem>
          </StyledSquaresWrapper>

        {!!this.state.movie?.genres &&
          <StyledGenresWrapper>
            <FontAwesomeIcon size={32} icon={faTags} />
            {this.state.movie?.genres.map((item: any) => {
              return <Tag key={item.id} name={item.name} />
            })}
          </StyledGenresWrapper>
        }

        <StyledSingleInfoWrapper>
          {!!this.state.movie?.tagline &&
            <StyledContentTagline>
              {this.state.movie?.title} - {this.state.movie?.tagline}
            </StyledContentTagline>
          }

          {!!this.state.movie?.overview &&
            <>
              <StyledLabel>Overview:</StyledLabel>
              <StyledContentText>
                {this.state.movie?.overview}
              </StyledContentText>
            </>
          }

          {!!this.state.movie?.production_companies &&
            <>
              <StyledLabel>Production:</StyledLabel>
              <StyledContentText>
                {this.state.movie?.production_companies.map((company) => {
                  return <StyledContentText key={company.id}>{company.name}</StyledContentText>
                })}
              </StyledContentText>
            </>
          }

          <StyledLabel>Release date:</StyledLabel>
          <StyledContentText>
            {this.state.release_date}
          </StyledContentText>

        </StyledSingleInfoWrapper>
      </ScrollView>
    )
  }
}

export default Single
