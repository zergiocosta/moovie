import { ApiResponse } from '../interfaces/ApiResponseModel'
import ApiService from './ApiService'

class MovieService {

  private baseUrl: string = 'movie'

  public getUpcomingMovies = (params: any): Promise<ApiResponse> => {
    return ApiService.list(`${this.baseUrl}/upcoming`, params)
  }

  public getMovieById = (movieId: number): Promise<ApiResponse> => {
    return ApiService.show(this.baseUrl, movieId)
  }

}

export default new MovieService()
