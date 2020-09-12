import * as React from 'react'
import { Button, View, Text } from 'react-native'

const Single = ({ ...props }) => {
  const { navigation } = props

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Single</Text>
      <Button
        title="Go to Single again"
        onPress={() => navigation.push('Single')}
      />
      <Button title="Go to Feed" onPress={() => navigation.navigate('Feed')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default Single