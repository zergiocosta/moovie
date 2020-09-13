import moment from 'moment'

class DateHelper {

  public apiDateToHumanReadableFormat(date: string): string {
    return moment(date, "YYYY-MM-DD").format("MMM D, YYYY")
  }

}

export default new DateHelper()