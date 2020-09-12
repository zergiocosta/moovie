import { MovieModel } from './MovieModel'
import { Images } from './ImageConfigurationModel'

export interface ApiResponse {
  status: number
  data: {
    results?: MovieModel[]
    page?: number
    total_results?: number
    dates?: {
        maximum: string
        minimum: string
    },
    total_pages?: number
    change_keys?: string[]
    images?: Images
  }
}