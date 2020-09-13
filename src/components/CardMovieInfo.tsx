import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import DateHelper from '../helpers/DateHelper'
import { MovieModel } from '../interfaces/MovieModel'

interface Props {
  icon: any
  date?: string
  text?: string | number
}

const CardMovieInfo: React.FC<Props> = (props: Props) => {
  const { icon, date, text } = props
  let convertedDate: string = ''
  if (date) {
    convertedDate = DateHelper.apiDateToHumanReadableFormat(date)
  }
  return (
    <Text 
      style={styles.cardText}
    >
      <FontAwesomeIcon
        style={styles.icon}
        color="#eee" 
        icon={ icon }
      />
      {!!text && text}
      {!!date && `Release: ${convertedDate}`}
    </Text>
  )
}

export default CardMovieInfo

const styles = StyleSheet.create({
  cardText: {
    marginTop: 8,
    color: '#eee',
    display: 'flex',
    justifyContent: 'center'
  },
  icon: {
    marginRight: 8
  }
})