import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login_Screen from '../../screens/login';
import Galerie_Details from '../../screens/galerie_page';
import Cube_Page from '../../screens/3d_page';
import Home from '../../screens/home_page';
const Stack = createNativeStackNavigator();

const Navigation_Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login_Screen} />
        <Stack.Screen name="Galerie" component={Galerie_Details} />
        <Stack.Screen name="3D" component={Cube_Page} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation_Route;
