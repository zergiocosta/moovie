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
  const posY: any = useRef( new Animated.Value(8) ).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
    }).start()
    Animated.timing(posY, {
      toValue: 0,
      duration: 700,
      easing: Easing.linear,
    }).start()
  }, [posY])

  return (
    <Animated.View
      style={{
        opacity: opacity,
        transform: [
          {translateY: posY}
        ]
      }}>
      <StyledTag>{name}</StyledTag>
    </Animated.View>
  )
}

export default Tag;
