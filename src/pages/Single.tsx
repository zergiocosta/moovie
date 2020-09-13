import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

import { MovieModel } from '../interfaces/MovieModel'
import MovieService from '../services/movie.service'
import { ApiResponse } from '../interfaces/ApiResponseModel'
import { ScrollView } from 'react-native-gesture-handler'
import SingleHeading from '../components/SingleHeading'
import CardMovieInfo from '../components/CardMovieInfo';
import CardMovie from '../components/CardMovie'
import { faCalendarCheck, faGlobeAmericas, faStar } from '@fortawesome/free-solid-svg-icons'

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
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    const movieId: number = this.props.route.params.movie.id
    this.getMovieById(movieId)
  }

  private async getMovieById(movieId: number): Promise<void> {
    MovieService.getMovieById(movieId).then(
      (response: ApiResponse) => {
        console.log('aqui', response.data)
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

        <Text style={styles.infoLabel}>Genres:</Text>
        <View style={styles.genresWrapper}>
          {this.state.movie?.genres.map((item: any) => {
            console.log('loop', item)
            return <Text key={item.id} style={styles.genreTag}>{item.nome}</Text>
          })}
        </View>

        <View style={styles.squaresWrapper}>
          <View style={styles.squareItem}>
            <Text>{this.state.movie?.production_countries[0].iso_3166_1}</Text>
          </View>
          <View style={[styles.squareItem, styles.squareItemBordered]}>
            <Text>{this.state.movie?.vote_count}</Text>
          </View>
          <View style={styles.squareItem}>
            <Text>{this.state.movie?.vote_average}</Text>
          </View>
        </View>

        <View style={styles.singleInfoWrapper}>
          <Text style={styles.infoLabel}>Overview:</Text>
          <Text style={styles.contentText}>{this.state.movie?.overview}</Text>
          
          
          <Text style={styles.infoLabel}>Release date:</Text>
          <Text style={styles.contentText}>{this.state.movie?.release_date}</Text>


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
        </View>
      </View>
    )
  }
}

export default Single

const styles = StyleSheet.create({
  genresWrapper: {
    display: 'flex'
  },
  genreTag: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#333',
    tintColor: '#eee',
    marginHorizontal: 8,
    marginVertical: 8
  },
  squaresWrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#333'
  },
  squareItem: {
    width: '33,33%',
    paddingTop: 24,
    paddingBottom: 24
  },
  squareItemBordered: {
    borderLeftColor: '#555',
    borderLeftWidth: 1,
    borderRightColor: '#555',
    borderRightWidth: 1,
  },
  singleInfoWrapper: {
    padding: 24
  },
  infoLabel: {
    marginBottom: 12,
    fontSize: 14
  },
  contentText: {
    fontSize: 18,
    marginBottom: 32
  }
})