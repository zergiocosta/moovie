import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import DateHelper from '../helpers/DateHelper'

interface Props {
  icon: any
  date?: string
  text?: string | number
}

const CardMovieInfo: React.FC<Props> = (props: Props) => {
  console.log(props)
  const { icon, date, text } = props
  let convertedDate: string = ''
  if (date) {
    convertedDate = DateHelper.apiDateToHumanReadableFormat(date)
  }
  return (
    <Text 
      style={styles.cardText}
    >
      {(!!text || !!date) &&
        <FontAwesomeIcon
          style={styles.icon}
          color="#eee" 
          icon={ icon }
        />
      }
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
    marginRight: 32
  }
})