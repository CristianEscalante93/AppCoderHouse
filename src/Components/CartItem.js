import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Entypo} from "@expo/vector-icons"
import { colors } from '../Global/colors'

const CartItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>{item.title}</Text>
        <Text style={styles.text2}>{item.brand}</Text>
        <Text style={styles.text3}>Cantidad: {item.quantity} Precio: $ {item.price}</Text>
      </View>
      <Entypo name="trash" size={24} color="black" />
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.neon,
    margin:10,
    padding:10,
    borderWidth:2,
    borderRadius:10,
    flex:1,
    height:100,
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems:"center"
  },
  textContainer:{
    width:"70%",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    
  },
  text1:{
    fontFamily:"PlayFair",
    fontSize:21,
    color:colors.letras
  },
  text2:{
    fontFamily:"Josefin",
    fontSize:17,
    color:colors.letras
  },
  text3:{
    fontFamily:"Josefin",
    fontSize:15,
    color:colors.letras
  }
  
})