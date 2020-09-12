import 'react-native-gesture-handler'
import React from 'react'
import {
  StyleSheet,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { ApiResponse } from './interfaces/ApiResponseModel'
import Feed from './pages/Feed'
import Single from './pages/Single'
import ImageConfigService from './services/imageConfig.service'

const Stack = createStackNavigator()

class App extends React.Component {
// const App = () => {

  componentDidMount() {
    console.log('FOIFOIFOIFOIFOFI')
    this.getImageConfig()
  }

  private getImageConfig(): void {
    ImageConfigService.getImageConfig().then(
      (response: ApiResponse) => {
        console.log('chegou config', response)
      }
    )
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Feed">
          <Stack.Screen name="Feed" component={Feed} />
          <Stack.Screen name="Single" component={Single} />
        </Stack.Navigator>      
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
})

export default App
