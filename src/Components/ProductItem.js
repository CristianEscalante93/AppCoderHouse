import { StyleSheet, Text, View,Image , Pressable} from 'react-native'
import { colors } from '../Global/colors'
import CardShadow from '../Wrappers/CardShadow.js'
import { useDispatch } from 'react-redux'
import {setProductSelected } from "../Features/shop/shopSlice.js"

const ProductItem = ({item, navigation, route}) => {

  const dispatch = useDispatch()

  return (
<Pressable onPress={()=>{
  dispatch(setProductSelected(item.id))
  navigation.navigate("Product", {id:item.id})}}>
<CardShadow style={styles.container}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={{uri:item.thumbnail}}
        />
      <Text style={styles.text}>{item.title}</Text>
</CardShadow>
</Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  container:{
        width:"80%",
        backgroundColor:colors.color1,
        color: colors.letras,
        marginHorizontal:"10%",
        marginVertical:10,
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"start",
        gap:30
    },
    text:{
      fontSize:20,
      color: colors.letras,
      fontFamily:"Josefin"
  },
    image:{
        width:50,
        height:50
    }
})