import 'react-native-gesture-handler'
import React from 'react'
import {
  StyleSheet,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import StorageHelper from './helpers/StorageHelper'
import { ApiResponse } from './interfaces/ApiResponseModel'
import { ImageConfigurationModel } from './interfaces/ImageConfigurationModel'
import Feed from './pages/Feed'
import Single from './pages/Single'
import ImageConfigService from './services/imageConfig.service'

const Stack = createStackNavigator()

class App extends React.Component {

  async componentDidMount() {
    await this.setupImageConfig()
  }

  private async setupImageConfig(): Promise<void> {
    const hasLocalConfig = await this.hasLocalImageConfig()
    if (!hasLocalConfig) this.getImageConfigFromApi()
  }

  private async hasLocalImageConfig(): Promise<ImageConfigurationModel | boolean> {
    let hasLocalConfig = false
    await StorageHelper.getObject('imageConfig').then(
      res => {
        if (res) hasLocalConfig = res
      }  
    )
    return hasLocalConfig
  }

  private async getImageConfigFromApi(): Promise<void> {
    ImageConfigService.getImageConfig().then(
      (response: ApiResponse) => {
        (response.data) && this.setLocalImageConfig(response.data)
      }
    ).catch(
      err => console.log('catch getImageConfigFromApi()', err)
    )
  }

  private async setLocalImageConfig(config: ImageConfigurationModel): Promise<void> {
    console.log('vai setar config', config)
    await StorageHelper.setObject('imageConfig', config)
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
