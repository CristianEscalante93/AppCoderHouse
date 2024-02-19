import { StyleSheet, Text, View, Image, Pressable , ToastAndroid, Button} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { colors } from '../Global/colors'
import { useDispatch } from 'react-redux'
import { addItem } from '../Features/cart/cartSlice'
import Toast from 'react-native-toast-message';

const ItemDetail = ({navigation , route}) => {
  const dispatch = useDispatch()
  const product = useSelector((state)=> state.shop.value.productSelected)

  const addCartProduct = ()=>{
    Toast.show({
      type: 'success',
      text1: `${product.title}`,
      text2: 'Producto agregado al carrito 🛒'
    })
    dispatch(addItem(product))
    navigation.navigate("CartStack")
  }

  return (
    <View style={styles.container}>
      <Image
      style={styles.image}
      source={{uri:product.thumbnail}}
      resizeMode='cover'/>
      <View style={styles.containerText} >
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <View style={styles.containerPrice}>
        <Text style={styles.price}>$ {product.price}</Text>
        <Pressable style={styles.boton} onPress={addCartProduct}>
          <Text style={styles.comprar}>🛒</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        justifyContent:"start",
        alignItems:"center"
    },
    image:{
      width:"90%",
      height:"40%"
    },
    volver:{
      padding:10,
      backgroundColor:colors.color1,
      width:"100%",
      flexDirection:"row",
      justifyContent:"center"
  },
  textVolver:{
    color: colors.letras
  },
  containerText:{
    gap:25,
    paddingHorizontal:5,
    paddingVertical:25,
    alignItems:"center"
  },
  title:{
    fontSize:20,
    fontWeight:"bold"
  },
  description:{

  },
  containerPrice:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    marginVertical:10
  },
  price:{
    fontSize:30
  },
  boton:{
    backgroundColor:"green",
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:5
  },
  comprar:{
    color: colors.letras
  }

  
})