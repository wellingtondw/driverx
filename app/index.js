/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import store from './src/store';

import Login from './src/pages/Login';
import Type from './src/pages/Steps/Type';
import Car from './src/pages/Steps/Car';
import Payment from './src/pages/Steps/Payment';
import Ride from './src/pages/Ride';
import Home from './src/pages/Home';

const app = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

AppRegistry.registerComponent(appName, () => app);
