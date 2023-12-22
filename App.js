import { StyleSheet,StatusBar  } from 'react-native'
import { useFonts } from "expo-font"
import { colors } from './src/Global/colors'
import Navigator from './src/Navigation/Navigator.js'
import { fonts } from './src/Global/Fonts.js'


const  App = () => {

  const [fontLoaded] = useFonts(fonts)

  if(!fontLoaded) return null
  
  
  return (
    <>
    <StatusBar
    backgroundColor={colors.color1}
    barStyle={colors.letras}
    />
    <Navigator/>
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

