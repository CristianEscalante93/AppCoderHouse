import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { colors } from '../Global/colors'
import { useEffect, useState } from 'react'

const Header = ({title}) => {

  const {width,height}= useWindowDimensions()
  const [landscape, setLandscape]= useState(false)

  useEffect(()=>{
    if(width > height){
      setLandscape(true)
    }else{
      setLandscape(false)
    }
  },[width,height])

  return (
    <View style= {landscape ? styles.containerLandscape : styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
      backgroundColor:colors.color1,
      color: colors.letras,
        width:"100%",
        height:80,
        justifyContent:"center",
        alignItems:"center"
    },
    containerLandscape:{
      backgroundColor:colors.color1,
      color: colors.letras,
        width:"100%",
        height:40,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:20,
        color: colors.letras,
        fontFamily:"Josefin"
    }
})
