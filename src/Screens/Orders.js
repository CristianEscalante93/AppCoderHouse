import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import allOrders from "../Data/orders.json"
import OrderItem from '../Components/OrderItem'

const Orders = () => {
  return (
    <View style={styles.container}>
      <FlatList
      data={allOrders}
      keyExtractor={item=>item.id}
      renderItem={({item})=> <OrderItem order={item}/>}/>
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
  container:{
    backgroundColor:"blue",
    flex:1
  }
})