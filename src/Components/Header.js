import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { colors } from '../Global/colors'
import { useEffect, useState } from 'react'
import {MaterialIcons} from "@expo/vector-icons"
import { deleteAllSession } from '../database'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../Features/auth/authSlice'

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

  const dispatch = useDispatch()
  const localId = useSelector(state=> state.auth.value.localId)

  const onLogout= ()=>{
    deleteAllSession().then(result => console.log(result))
    dispatch(clearUser())
  }

  return (
    <View style= {landscape ? styles.containerLandscape : styles.container}>
      <Text style={styles.text}>{title}</Text>
      {localId && <Pressable onPress={onLogout} style={styles.logout}>
        <MaterialIcons name="logout" size={30} color="black"/>
      </Pressable>}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
      backgroundColor:colors.color1,
      color: colors.letras,
        width:"100%",
        height:100,
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
    },
    logout:{
        position: "absolute",
        right:10
    }
})
