import DateHelper from '../../src/helpers/DateHelper'

describe('DateHelper', () => {

  it('apiDateToHumanReadableFormat() should return human readable date', () => {
    const inputDate: string = '2020-09-18'

    const result = DateHelper.apiDateToHumanReadableFormat(inputDate)

    expect(result).toBe('Sep 18, 2020')
  })

})
