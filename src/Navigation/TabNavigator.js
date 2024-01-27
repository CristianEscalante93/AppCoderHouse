
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import ShopStack from './ShopStack.js';
import CartStack from './CartStack.js';
import OrdersStack from './OrdersStack.js';
import TabIcon from '../Components/TabIcon.js';
import ProfileStack from './ProfileStack.js';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown:false,
          tabBarShowLabel:false,
          tabBarStyle: styles.tabBar
        }}>
        <Tab.Screen 
          name="ShopStack" 
          component={ShopStack}
          options={{
            tabBarIcon:({focused})=> <TabIcon icon="shop" label="Productos" focused={focused} />
          }}/>
        <Tab.Screen 
          name="CartStack" 
          component={CartStack}
          options={{
            tabBarIcon:({focused})=> <TabIcon icon="shopping-cart" label="Carrito" focused={focused}/>
          }}/>
        <Tab.Screen 
          name="OrdersStack" 
          component={OrdersStack}
          options={{
            tabBarIcon:({focused})=>  <TabIcon icon="list" label="Ordenes" focused={focused}/>
          }}/>
        <Tab.Screen 
          name="Profilestack" 
          component={ProfileStack}
          options={{
            tabBarIcon:({focused})=>  <TabIcon icon="user" label="Perfil" focused={focused}/>
          }}/>
      </Tab.Navigator>

  )
}

export default TabNavigator

const styles = StyleSheet.create({
  tabBar:{
    backgroundColor:"grey",
    shadowColor:"black",
    elevation:9,
    position: 'absolute',
    bottom:10,
    left:20,
    right:20,
    borderRadius:15,
    height:90
  }
})
