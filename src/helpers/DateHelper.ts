import { monthsArray } from '../constants/months'

class DateHelper {

  private months: string[] = monthsArray

  public apiDateToHumanReadableFormat = (date: string): string => {
    const dateInstance = new Date(date+'T00:00')
    const year = dateInstance.getFullYear()
    const monthIndex = dateInstance.getMonth()
    const month = this.months[monthIndex]
    const day = dateInstance.getDate()

    return `${month} ${day}, ${year}`
  }

}

export default new DateHelper()
