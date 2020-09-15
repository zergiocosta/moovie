import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Easing } from 'react-native-reanimated'
import Animated from 'react-native-reanimated'

import { StyledTag } from './styles'

interface Props {
  name: string
}

const Tag: React.FC<Props> = (props: Props) => {
  const { name } = props
  const opacity: any = useRef( new Animated.Value(0) ).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
    }).start()
  }, [opacity])

  return (
    <Animated.View
      style={{
        opacity: opacity
      }}>
      <StyledTag>{name}</StyledTag>
    </Animated.View>
  )
}

export default Tag;
