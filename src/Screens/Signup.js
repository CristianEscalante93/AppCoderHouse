import {useEffect, useState } from 'react'
import { View, Text ,StyleSheet, Pressable, TouchableOpacity} from 'react-native'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { colors } from '../Global/colors'
import { useSignupMutation } from '../App/service/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../Features/auth/authSlice'
import { insertSession } from '../database/index.js'
import { signupSchema } from '../validations/signupSchema'


const Signup = ({navigation}) => {
  const dispatch = useDispatch()
  const [triggerSignup,{data,isError,isSuccess,error,isLoading}] = useSignupMutation()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")

  const [emailError, setEmailError]= useState("")
  const [passwordError, setPasswordError]= useState("")
  const [confirmPasswordError, setConfirmPasswordError]= useState("")

  useEffect(()=>{
    if(isSuccess) {
      dispatch(setUser(data))
      insertSession(data)
      .then((result)=> console.log(result))
      .catch((err) => console.log(err))}
    if(isError) console.log(error)
  },[data,isError,isSuccess])



  const onSubmit = () => {
    try {
        setEmailError("")
        setPasswordError("")
        setConfirmPasswordError("")
        signupSchema.validateSync({email,password,confirmPassword})
        triggerSignup({email,password})
    } catch (error) {
        console.log(error.path)
        console.log(error.message)
        switch(error.path){
          case "email": 
            setEmailError(error.message)
            break
          case "password": 
            setPasswordError(error.message)
            break
          case "confirmPassword": 
            setConfirmPasswordError(error.message)
            break
          default:
            break
        }
    }
  }


  return (
    <View style={styles.main}>
      <View style={styles.container}>
          <Text style={styles.title} >Inscribirse</Text>
          <InputForm
            label="Email"
            value={email}
            onChangeText={(t) => setEmail(t)}
            isSecure={false}
            error={emailError}
          />
          <InputForm
            label="Password"
            value={password}
            onChangeText={(t) => setPassword(t)}
            isSecure={true}
            error={passwordError}
            color= {colors.neon}
          />
          <InputForm
            label="Confirm password"
            value={confirmPassword}
            onChangeText={(t) => setConfirmPassword(t)}
            isSecure={true}
            error={confirmPasswordError}

          />
          <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
						<Text style={styles.loginButtonText}>Enviar</Text>
					</TouchableOpacity>
          <Text style={styles.sub}>¿Ya tienes una cuenta?</Text>
          <Pressable onPress={()=> navigation.navigate("Login")}>
              <Text style={styles.subLink}>Ingresar</Text>
          </Pressable>
      </View>
    </View>
  )
}


export default  Signup


const styles = StyleSheet.create({
    main:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    container:{
      width:"90%",
      backgroundColor:colors.letras,
      gap:15,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      paddingVertical:20,
      shadowColor: colors.neon,
      shadowOffset: {
        width: 1,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16,
      elevation:25,
    },
    title:{
      fontSize:22,
      fontFamily:"Lobster"
    },
    sub:{
      fontSize:14,
      fontFamily:"Josefin"
    },
    subLink:{
      fontSize:14,
      fontFamily:"Josefin",
      color:"green"
    },
    enviar:{
      backgroundColor: colors.neon
    },
    loginButton: {
      backgroundColor: colors.blue,
      padding: 15,
      borderRadius: 8,
      alignItems: "center",
      width: "50%"
    },
    loginButtonText: {
      color: colors.letras,
      fontSize: 16,
      fontWeight: "bold",
    }
})
