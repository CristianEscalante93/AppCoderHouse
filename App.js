import { StyleSheet,StatusBar  } from 'react-native'
import { useFonts } from "expo-font"
import { colors } from './src/Global/colors'
import { fonts } from './src/Global/Fonts.js'
import { store } from "./src/App/store.js"
import { Provider } from 'react-redux'
import MainNavigator from './src/Navigation/MainNavigator.js'
import { init } from './src/database/index.js'

init()
  .then(()=> console.log("DB Initialized"))
  .catch(err => console.log(err))

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
        <MainNavigator/>
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

