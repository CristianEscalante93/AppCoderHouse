
import Header from '../Components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../Global/colors';
import Orders from '../Screens/Orders.js';

const Stack = createNativeStackNavigator();
const OrdersStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Orders'
        screenOptions={({route})=>{
          return{
            header : ()=> <Header title="Ordenes" color={colors.letras}/>
          }
        }}    
      >
        <Stack.Screen name="Cart" component={Orders} />
    </Stack.Navigator>
  )
}

export default OrdersStack
