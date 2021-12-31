import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './rootNavigation';

import Login from '../pages/Login';
import Type from '../pages/Steps/Type';
import Car from '../pages/Steps/Car';
import Payment from '../pages/Steps/Payment';
import Ride from '../pages/Ride';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

const Routes = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Type"
        component={Type}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Payment"
        component={Payment}
      />
      <Stack.Screen options={{headerShown: false}} name="Car" component={Car} />
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Ride"
        component={Ride}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
