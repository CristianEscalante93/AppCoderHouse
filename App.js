import { StyleSheet,StatusBar  } from 'react-native'
import { useFonts } from "expo-font"
import { colors } from './src/Global/colors'
import { fonts } from './src/Global/Fonts.js'
import TabNavigator from './src/Navigation/TabNavigator.js'
import { store } from "./src/App/store.js"
import { Provider } from 'react-redux'


const  App = () => {

  const [fontLoaded] = useFonts(fonts)

  if(!fontLoaded) return null
  
  
  return (
    <>
      <StatusBar
      backgroundColor={colors.color1}
      barStyle={colors.letras}
        />
      <Provider store={store}>
        <TabNavigator/>
      </Provider>
    </>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
})

