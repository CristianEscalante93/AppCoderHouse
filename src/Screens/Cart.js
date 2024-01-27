import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import allCart from "../Data/cart.json"
import { useEffect, useState } from 'react'
import CartItem from '../Components/CartItem'
import { colors } from '../Global/colors'
import { useSelector } from 'react-redux'
import { usePostOrdersMutation } from '../App/service/shopServices'

const Cart = () => {

  const cart= useSelector(state => state.cart.value)
  const [triggerPostOrder] = usePostOrdersMutation()
  

  return (
    <View style={styles.container}>
      <FlatList
      data={cart.items}
      keyExtractor={item=>item.id}
      renderItem={({item})=> <CartItem item={item}/>}  />
      <View style={styles.confirmContainer}>
        <Pressable onPress= {()=> triggerPostOrder(cart)}>
          <Text style={styles.text}>Confirmar!!!</Text>
        </Pressable>
        <Text style={styles.text}>Total: $ {cart.total}</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container:{
    backgroundColor:"blue",
    flex:1,
    justifyContent:"flex-end",
    //alignItems:"center",
    paddingBottom:110
  },
  confirmContainer:{
    backgroundColor:"grey",
    padding:15,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    width:"100%"
  },
  text:{
    fontFamily:"PlayFair",
    fontSize:15,
    color:colors.letras
  }
})