import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

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
      shadowColor: colors.neon,
      shadowOffset: {
        width: 1,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16,
      elevation:25,
    }

})