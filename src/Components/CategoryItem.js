import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import CardShadow from '../Wrappers/CardShadow.js'
import {  useDispatch } from 'react-redux'
import {setProductsFilteredByCategory} from "../Features/shop/shopSlice.js"

const CategoryItem = ({category, navigation, route}) => {

  const dispatch = useDispatch()

  return (
    <Pressable onPress={()=>{
      dispatch(setProductsFilteredByCategory(category))
      navigation.navigate("Category",{category})}}>
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
        backgroundColor:colors.letras,
        borderWidth:2,
        borderRadius: 15,
        borderColor:colors.oscuro,
        color: colors.oscuro,
        margin:10,
        padding:10,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
      fontSize:20,
      color: colors.oscuro,
      fontFamily:"Josefin"
  },
})