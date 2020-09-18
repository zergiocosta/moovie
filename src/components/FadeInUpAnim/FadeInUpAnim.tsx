import React from 'react';
import { useEffect, useRef } from 'react'
import Animated, { Easing } from 'react-native-reanimated'

const FadeInUpAnim: React.FC = (props) => {
  const opacity: any = useRef( new Animated.Value(0) ).current
  const posY: any = useRef( new Animated.Value(8) ).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
    }).start()
  }, [opacity])

  useEffect(() => {
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
      {props.children}
    </Animated.View>
  )
}

export default FadeInUpAnim
