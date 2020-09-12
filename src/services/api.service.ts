import axios from 'axios'
import { AppConfig } from '../app.config'
import { ApiResponse } from '../interfaces/ApiResponse'

class ApiService {

  private root: string = AppConfig.baseUrl
  private apiKey: string = AppConfig.apiKey

  public list(url: string): Promise<ApiResponse> {
    return axios.get(`${this.root}/${url}?api_key=${this.apiKey}`)
  }
  
  public show(url: string, id: number): Promise<ApiResponse> {
    console.log(`${this.root}/${url}/${id}?api_key=${this.apiKey}`)
    return axios.get(`${this.root}/${url}/${id}?api_key=${this.apiKey}`)
  }

}

export default new ApiService()