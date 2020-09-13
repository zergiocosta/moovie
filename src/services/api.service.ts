import axios, { AxiosError, AxiosResponse } from 'axios'
import { AppConfig } from '../app.config'
import { ApiResponse } from '../interfaces/ApiResponseModel'

import Toast from 'react-native-simple-toast'

class ApiService {

  private root: string = AppConfig.baseUrl
  private apiKey: string = AppConfig.apiKey

  constructor() {
    axios.interceptors.response.use(
      (response: AxiosResponse<ApiResponse>) => response,
      (error: AxiosError) => {
        Toast.show('Não foi possível carregar o conteúdo')
        return Promise.reject(error)
      }
    )
  }

  public list(url: string, params?: any): Promise<ApiResponse> {
    return axios.get(`${this.root}/${url}`, { params: this.requestOptionsParams(params) })
  }
  
  public show(url: string, id: number, params?: any): Promise<ApiResponse> {
    return axios.get(`${this.root}/${url}/${id}`, { params: this.requestOptionsParams(params) })
  }

  private requestOptionsParams(params?: any): any {
    const requestParams = {
      api_key: this.apiKey,
      ...params
    }
    return requestParams
  }

}

export default new ApiService()