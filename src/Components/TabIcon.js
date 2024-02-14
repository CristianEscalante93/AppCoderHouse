import { StyleSheet, Text, View } from 'react-native'
import {Entypo} from "@expo/vector-icons"
import { colors } from '../Global/colors'

const TabIcon = ({icon,label,focused}) => {
  return (
    <View style={styles.container}>
      <Entypo name={icon} size={40} color={focused ? colors.neon: colors.letras}/>
      <Text style={{...styles.text,...{color:focused ? colors.neon: colors.letras}}}>{label}</Text>
    </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    text:{
        color:"white",
        textAlign:"center"
    }
})