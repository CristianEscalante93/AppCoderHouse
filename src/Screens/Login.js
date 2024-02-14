import {useState ,useEffect} from 'react'
import { View, Text ,StyleSheet, Pressable, TouchableOpacity} from 'react-native'
import { colors } from '../Global/colors'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import {useLoginMutation} from "../App/service/auth.js"
import { useDispatch } from 'react-redux'
import { setUser } from '../Features/auth/authSlice'
import { insertSession } from '../database/index.js'




const Login = ({navigation}) => {
  const dispatch = useDispatch()
  const [triggerLogin,{data,isError,isSuccess,error,isLoading}] = useLoginMutation()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  useEffect(()=>{
    if(isSuccess) {
      dispatch(setUser(data))
      insertSession(data)
      .then((result)=> console.log(result))
      .catch((err) => console.log(err))}
    if(isError) console.log(error)
  },[data,isError,isSuccess])


  const onSubmit = () => {
    triggerLogin({email,password})
  }
  return (
    <View style={styles.main}>
      <View style={styles.container}>
          <Text style={styles.title} >Inicia sesión para comenzar</Text>
          <InputForm
            label="Email"
            value={email}
            onChangeText={(t) => setEmail(t)}
            isSecure = {false}
            error=""
          />
          <InputForm
            style= {styles.form}
            label="Password"
            value={password}
            onChangeText={(t) => setPassword(t)}
            isSecure={true}
            color= {colors.letras}
            error=""
          />
          <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
						<Text style={styles.loginButtonText}>Iniciar Sesion</Text>
					</TouchableOpacity>
          <Text style={styles.sub}>¿No tienes una cuenta?</Text>
          <Pressable onPress={()=> navigation.navigate("Signup")} >
              <Text style={styles.subLink}>Ingresar</Text>
          </Pressable>
      </View>
    </View>
  )
}


export default Login


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
      fontFamily:"Josefin",
    },
    subLink:{
      fontSize:14,
      fontFamily:"Josefin",
      color:colors.neon
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
