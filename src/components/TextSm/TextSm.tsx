import React from 'react'

import { StyledTextSm } from './styles'

interface Props {
  text: string
}

const TextSm: React.FC<Props> = (props: Props) => {
  const { text } = props
  return <StyledTextSm>{text}</StyledTextSm>
}

export default TextSm
