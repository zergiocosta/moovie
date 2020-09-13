import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import StorageHelper from './helpers/StorageHelper'
import { ApiResponse } from './interfaces/ApiResponseModel'
import { ImageConfigurationModel } from './interfaces/ImageConfigurationModel'
import Feed from './pages/Feed'
import Single from './pages/Single'
import ImageConfigService from './services/imageConfig.service'

class App extends React.Component {

  componentDidMount() {
    this.setupImageConfig()
  }

  private async setupImageConfig(): Promise<void> {
    const hasLocalConfig: ImageConfigurationModel | boolean = await this.hasLocalImageConfig()
    !hasLocalConfig && this.getImageConfigFromApi()
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

  private getImageConfigFromApi(): void {
    ImageConfigService.getImageConfig().then(
      (response: ApiResponse) => {
        (response.data) && this.setLocalImageConfig(response.data)
      }
    )
  }

  private setLocalImageConfig(config: ImageConfigurationModel): void {
    StorageHelper.setObject('imageConfig', config)
  }

  render() {
    const Stack = createStackNavigator()
    
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

export default App
