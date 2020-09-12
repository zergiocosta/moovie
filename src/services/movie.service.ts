import { ApiResponse } from '../interfaces/ApiResponseModel'
import ApiService from './api.service'

class MovieService {

  private baseUrl: string = 'movie'

  public getUpcomingMovies(): Promise<ApiResponse> {
    return ApiService.list(`${this.baseUrl}/upcoming`)
  }

  public getMovieById(movieId: number): Promise<ApiResponse> {
    return ApiService.show(this.baseUrl, movieId)
  }

}

export default new MovieService()