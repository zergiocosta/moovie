import axios, { AxiosError, AxiosResponse } from 'axios'
import { AppConfig } from '../app.config'
import { ApiResponse } from '../interfaces/ApiResponseModel'

import Toast from 'react-native-simple-toast'

class ApiService {

  private root: string = AppConfig.baseUrl
  private apiKey: string = AppConfig.apiKey

  public list(url: string, params?: any): Promise<ApiResponse> {
    return axios.get(`${this.root}/${url}`, { params: this.requestOptionsParams(params) })
  }
  
  public show(url: string, id: number): Promise<ApiResponse> {
    console.log(`${this.root}/${url}/${id}?api_key=${this.apiKey}`)
    return axios.get(`${this.root}/${url}/${id}?api_key=${this.apiKey}`)
  }

  private requestOptionsParams(params?: any): any {
    console.log(params)
    const requestParams = {
      api_key: this.apiKey,
      ...params
    }
    return requestParams
  }

}

axios.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => response,
  (error: AxiosError) => {
    Toast.show('Ocorreu um erro ao carregar o conteúdo')
    return Promise.reject(error)
  }
)

export default new ApiService()