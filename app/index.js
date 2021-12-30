/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import Login from './src/pages/Login';
import Type from './src/pages/Steps/Type';
import Car from './src/pages/Steps/Car';
import Payment from './src/pages/Steps/Payment';
import Ride from './src/pages/Ride';
import Home from './src/pages/Home';

AppRegistry.registerComponent(appName, () => Home);
