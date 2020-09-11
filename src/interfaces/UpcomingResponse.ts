import { MovieModel } from './MovieModel';

export interface UpcomingResponse {
  results: MovieModel[]
  page: number
  total_results: number
  dates: {
      maximum: string
      minimum: string
  },
  total_pages: number
}