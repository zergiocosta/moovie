const _ = require('lodash')

const axios = jest.requireActual('axios')
jest.unmock('axios');

const MockAdapter = require('axios-mock-adapter')
const mockAxios = new MockAdapter(axios)

module.exports = _.assignIn(axios, mockAxios)
