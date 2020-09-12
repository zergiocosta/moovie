import AsyncStorage from '@react-native-community/async-storage'

class StorageHelper {

  public async setObject(key: string, value: Object): Promise<void> {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  }

  public async getObject(key: string): Promise<any> {
    const value = await AsyncStorage.getItem(key)
    return (value) ? JSON.parse(value) : null
  }

  public async removeItem(key: string): Promise<void> {
    await AsyncStorage.removeItem(key)
  }

}

export default new StorageHelper()