import axios, { AxiosError, AxiosResponse } from 'axios'

import { AppConfig } from '../AppConfig'
import { ApiResponse } from '../interfaces/ApiResponseModel'
import ToastService from './ToastService'


class ApiService {

  private root: string = AppConfig.baseUrl
  private apiKey: string = AppConfig.apiKey

  constructor() {
    this.setupResponseInterceptor()
  }

  public list = (url: string, params?: any): Promise<ApiResponse> => {
    return axios.get(`${this.root}/${url}`, { params: this.requestOptionsParams(params) })
  }

  public show = (url: string, id: number, params?: any): Promise<ApiResponse> => {
    return axios.get(`${this.root}/${url}/${id}`, { params: this.requestOptionsParams(params) })
  }

  private requestOptionsParams = (params?: any): any => {
    const requestParams = {
      api_key: this.apiKey,
      ...params
    }
    return requestParams
  }

  private setupResponseInterceptor = (): void => {
    axios.interceptors.response.use(
      (response: AxiosResponse<ApiResponse>) => response,
      (error: AxiosError) => {
        ToastService.show('Error while loading content')
        return Promise.reject(error)
      }
    )
  }

}

export default new ApiService()
