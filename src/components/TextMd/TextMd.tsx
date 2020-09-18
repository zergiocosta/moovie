import React from 'react'

import FadeInUpAnim from '../FadeInUpAnim/FadeInUpAnim'

import { StyledTextMd } from './styles'

interface Props {
  text: string
}

const TextMd: React.FC<Props> = (props: Props) => {
  const { text } = props

  return (
    <FadeInUpAnim>
      <StyledTextMd>{text}</StyledTextMd>
    </FadeInUpAnim>
  )
}

export default TextMd
