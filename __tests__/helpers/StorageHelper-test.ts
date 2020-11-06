import StorageHelper from '../../src/helpers/StorageHelper'

describe('StorageHelper', () => {

  interface TestDataType {
    id: number,
    status: number
  }
  let inputData: TestDataType = {
    id: 1,
    status: 200
  }

  beforeEach( async () => {
    await StorageHelper.setObject('testData', inputData)
  })

  afterEach( async () => {
    await StorageHelper.removeItem('testData')

    const storedData: TestDataType = await StorageHelper.getObject('testData')

    expect(storedData).toBeFalsy()
  })

  it('should get the right data from async storage', async () => {
    const storedData: TestDataType = await StorageHelper.getObject('testData')

    expect(storedData.id).toBe(inputData.id)
  })

})
