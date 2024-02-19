import { FlatList, Pressable, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import allCart from "../Data/cart.json"
import { useEffect, useState } from 'react'
import CartItem from '../Components/CartItem'
import { colors } from '../Global/colors'
import { useSelector } from 'react-redux'
import { usePostOrdersMutation } from '../App/service/shopServices'
import Toast from 'react-native-toast-message';

const Cart = ({navigation}) => {

  const cart= useSelector(state => state.cart.value)
  const [triggerPostOrder] = usePostOrdersMutation()
  const localId = useSelector(state => state.auth.value.localId)

  const addOrder = ()=>{
    Toast.show({
      type: 'success',
      text1: 'Gracias',
      text2: 'Orden realizada!!!'
    })
    triggerPostOrder({localId,order:cart})
    navigation.navigate("OrdersStack" )
  }

  return (
    <View style={styles.container}>
      <FlatList
      data={cart.items}
      keyExtractor={item=>item.id}
      renderItem={({item})=> <CartItem item={item}/>}  />
      <View style={styles.confirmContainer}>
        <TouchableOpacity style={styles.Button} onPress={addOrder}>
						<Text style={styles.text}>Confirmar!!!</Text>
					</TouchableOpacity>
        <Text style={styles.text}>Total: $ {cart.total}</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.color1,
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
    color: colors.letras,
    fontSize: 16,
    fontWeight: "bold",
  },
  Button:{
    backgroundColor: colors.blue,
      padding: 15,
      borderRadius: 8,
      alignItems: "center",
      width: "50%"
  }
})