import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import CardShadow from '../Wrappers/CardShadow.js'

const CategoryItem = ({category, navigation, route}) => {

  

  return (
    <Pressable onPress={()=>navigation.navigate("Category",{category})}>
      <CardShadow style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </CardShadow>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container:{
        width:"80%",
        marginHorizontal:"10%",
        backgroundColor:colors.color1,
        color: colors.letras,
        margin:10,
        padding:10,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
      fontSize:20,
      color: colors.letras,
      fontFamily:"Josefin"
  },
})