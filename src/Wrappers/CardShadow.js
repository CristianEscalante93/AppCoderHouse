import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardShadow = ({children,style}) => {
  return (
    <View style={{...styles.container,...style}}>
        {children}
    </View>
  )
}

export default CardShadow

const styles = StyleSheet.create({
    container:{
      shadowColor: "green",
      shadowOffset: {
        width: 1,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16,
      elevation:25,
    }

})