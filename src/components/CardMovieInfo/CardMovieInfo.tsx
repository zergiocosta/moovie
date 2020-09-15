import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import DateHelper from '../../helpers/DateHelper'

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
    <View
      style={styles.cardText}
    >
      {(!!text || !!date) &&
        <FontAwesomeIcon
          color="#eee"
          icon={ icon }
        />
      }
      {!!text && <Text style={styles.iconInfo}>{text}</Text>}
      {!!date && <Text style={styles.iconInfo}>Release: {convertedDate}</Text>}
    </View>
  )
}

export default CardMovieInfo

const styles = StyleSheet.create({
  cardText: {
    marginTop: 8,
    color: '#eee',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  iconInfo: {
    marginTop: -16,
    marginLeft: 24,
    color: '#eee',
    flex: 1,
    flexWrap: 'wrap'
  }
})
