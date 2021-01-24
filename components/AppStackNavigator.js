import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyDonationScreen from '../screens/MyDonationScreen';
import SettingScreen from '../screens/SettingScreen';
import {createStackNavigator} from "react-navigation-stack"
import BookDonateScreen from '../screens/BookDonateScreen';
import RecieverDetailsScreen from '../screens/RecieverDetailsScreen';

export const AppStackNavigator = createStackNavigator({
  BookDonateList : {
    screen : BookDonateScreen,
    navigationOptions:{
      headerShown:false
    }
    },

   RecieverDetails : {
      screen : RecieverDetailsScreen,
      navigationOptions:{
        headerShown:false
      }
      }
  },
  {
    initialRouteName : 'BookDonateList'
  })