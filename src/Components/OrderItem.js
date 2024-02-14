import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../Global/colors';

const OrderItem = ({order}) => {

  const total = order.items.reduce((acc,product)=> acc + (product.price*product.quantity),0)

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>{(order.updateAt)}</Text>
        <Text style={styles.text2}>Total: ${total}</Text>
      </View>
      <FontAwesome name="search" size={24} color="black" />
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#EDF1D6",
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
    fontFamily:"Josefin",
    fontSize:21,
    color:"black"
  },
  text2:{
    fontFamily:"Josefin",
    fontSize:17,
    color:"black"
  }

})