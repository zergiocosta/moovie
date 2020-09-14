import React from 'react'
import { View, Text } from 'react-native'

import { MovieModel } from '../../interfaces/MovieModel'
import MovieService from '../../services/movie.service'
import { ApiResponse } from '../../interfaces/ApiResponseModel'
import SingleHeading from '../../components/SingleHeading/SingleHeading'
import CardMovieInfo from '../../components/CardMovieInfo'
import Tag from '../../components/Tag/Tag'
import { 
  faCalendarCheck,
  faGlobeAmericas,
  faStar,
  faTags
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { 
  StyledGenresWrapper,
  StyledLabel,
  StyledSquaresWrapper,
  StyledSquareItem,
  StyledSquareItemBordered,
  StyledContentText,
  StyledSingleInfoWrapper
} from './styles'

interface Props {
  navigation: any
  route: any
  movie: MovieModel
}

interface State {
  movie?: MovieModel
  isLoading: boolean
}

class Single extends React.Component<Props, State> {

  constructor(props: Readonly<Props>) {
    super(props)
    console.log(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    const movieId: number = this.props.route.params.movie.id
    this.getMovieById(movieId)
  }

  private async getMovieById(movieId: number): Promise<void> {
    console.log(movieId)
    MovieService.getMovieById(movieId).then(
      (response: ApiResponse) => {
        console.log(response)
        this.setState({
          movie: response.data as MovieModel,
          isLoading: false
        }, () => console.log(this.state.movie))
      }
    )
  }
  
  render() {
    return (
      <View>
        <SingleHeading movie={this.state.movie!} />

        <StyledSquaresWrapper>
          <StyledSquareItem>
            <Text>{this.state.movie?.production_countries[0].iso_3166_1}</Text>
          </StyledSquareItem>
          <StyledSquareItemBordered>
            <Text>{this.state.movie?.vote_count}</Text>
          </StyledSquareItemBordered>
          <StyledSquareItem>
            <Text>{this.state.movie?.vote_average}</Text>
          </StyledSquareItem>
        </StyledSquaresWrapper>

        <StyledGenresWrapper>
          <FontAwesomeIcon size={32} icon={faTags} />
          {this.state.movie?.genres.map((item: any) => {
            return <Tag key={item.id} name={item.name} />
          })}
        </StyledGenresWrapper>

        <StyledSingleInfoWrapper>
          <StyledLabel>Overview:</StyledLabel>
          <StyledContentText>
            {this.state.movie?.overview}
          </StyledContentText>
          
          <StyledLabel>Release date:</StyledLabel>
          <StyledContentText>
            {this.state.movie?.release_date}
          </StyledContentText>

          <CardMovieInfo
            icon={faCalendarCheck}
            date={this.state.movie?.release_date} 
          />
          <CardMovieInfo
            icon={faGlobeAmericas}
            text={`Language: ${this.state.movie?.original_language}`}
          />
          <CardMovieInfo
            icon={faStar}
            text={this.state.movie?.vote_average} 
          />
        </StyledSingleInfoWrapper>
      </View>
    )
  }
}

export default Single