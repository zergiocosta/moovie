import { ApiResponse } from '../interfaces/ApiResponseModel'
import ApiService from './ApiService'

class ImageConfigService {

  private baseUrl: string = 'configuration'

  public getImageConfig = (): Promise<ApiResponse> => {
    return ApiService.list(this.baseUrl)
  }

}

export default new ImageConfigService()
