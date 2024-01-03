import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { colors } from '../Global/colors'


const ItemDetail = ({route}) => {

  const product = useSelector((state)=> state.shop.value.productSelected)

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
        <Pressable style={styles.boton}>
          <Text style={styles.comprar}>Comprar ahora</Text>
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