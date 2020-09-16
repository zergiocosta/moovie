import Toast from 'react-native-simple-toast'

class ToastService {

  public show = (message: string): void => {
    Toast.show(message)
  }

}

export default new ToastService()
