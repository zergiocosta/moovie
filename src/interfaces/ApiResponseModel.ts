import { MovieModel } from './MovieModel'

export interface ApiResponse {
  status: number
  data: {
    results?: MovieModel[]
    page: number
    total_results: number
    dates: {
        maximum: string
        minimum: string
    },
    total_pages: number

  }
}