
import Header from '../Components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../Global/colors';
import Cart from '../Screens/Cart.js';

const Stack = createNativeStackNavigator();
const CartStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Cart'
        screenOptions={({route})=>{
          return{
            header : ()=> <Header title="Carrito" color={colors.letras}/>
          }
        }}    
      >
        <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  )
}

export default CartStack

