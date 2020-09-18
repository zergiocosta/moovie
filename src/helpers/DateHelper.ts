const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]
class DateHelper {

  public apiDateToHumanReadableFormat = (date: string): string => {
    const dateInstance = new Date(date+'T00:00')
    const year = dateInstance.getFullYear()
    const monthIndex = dateInstance.getMonth()
    const month = months[monthIndex]
    const day = dateInstance.getDate()

    return `${month} ${day}, ${year}`
  }

}

export default new DateHelper()
