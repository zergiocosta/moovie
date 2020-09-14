import React from 'react'

import { StyledTag } from './styles'

interface Props {
  name: string
}

const Tag: React.FC<Props> = (props: Props) => {
  const { name } = props
  return <StyledTag>{name}</StyledTag>
}

export default Tag;