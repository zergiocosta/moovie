import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Upcoming } from '../../__mocks__/upcoming'
import { Movie } from '../../__mocks__/413518'
import { AppConfig } from '../../src/AppConfig'
import ApiService from '../../src/services/ApiService'

jest.mock("axios", () => {
  return {
    create: () => new Promise(() => {} ),
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() }
    }
  }
})
jest.mock('react-native-simple-toast', () => ({
  SHORT: jest.fn(),
}))

describe('ApiService', () => {
  let mock = new MockAdapter(axios)

  mock.onGet("/upcoming").reply(200, Upcoming, { api_key: AppConfig.apiKey })
  mock.onGet("/movie").reply(200, Movie, { api_key: AppConfig.apiKey })

  it('should fetch data', async () => {
    await ApiService.list('/upcoming').then(
      res => {
        expect(res).toBeFalsy()
      }
    )

  })

})
