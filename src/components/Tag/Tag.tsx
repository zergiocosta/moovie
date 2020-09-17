import React from 'react'

import FadeInUpAnim from '../FadeInUpAnim/FadeInUpAnim'

import { StyledTag } from './styles'

interface Props {
  name: string
}

const Tag: React.FC<Props> = (props: Props) => {
  const { name } = props

  return (
    <FadeInUpAnim>
      <StyledTag>{name}</StyledTag>
    </FadeInUpAnim>
  )
}

export default Tag;
