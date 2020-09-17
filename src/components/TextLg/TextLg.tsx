import React from 'react'

import { StyledTextLg } from './styles'

interface Props {
  text: string
}

const TextLg: React.FC<Props> = (props: Props) => {
  const { text } = props
  return <StyledTextLg>{text}</StyledTextLg>
}

export default TextLg
