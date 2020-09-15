import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import DateHelper from '../../helpers/DateHelper'
import {
  StyledContainer,
  StyledContent
} from './styles'

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
    <StyledContainer>
      {(!!text || !!date) &&
        <FontAwesomeIcon
          color="#eee"
          icon={ icon }
        />
      }
      {!!text && <StyledContent>{text}</StyledContent>}
      {!!date && <StyledContent>Release: {convertedDate}</StyledContent>}
    </StyledContainer>
  )
}

export default CardMovieInfo
