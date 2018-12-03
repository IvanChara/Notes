import {createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator} from 'react-navigation'
import React, {Component}  from 'react';
import { StyleSheet, Text, View, Platform,
TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import AuthLoadingScreen from './Login/AuthLoadingScreen'
import Nuevo from './Login/Nuevo';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import HomeScreen from './Logueado/HomeScreen';
import SettingsScreen from './Logueado/SettingsScreen';
import Notas from './Logueado/Notas';

const AuthStackNavigator = createStackNavigator({
  Nuevo: Nuevo,
  Login: Login,
  SignUp: SignUp
})

/**/const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: () => (
        <Icon name="ios-home" size={24} />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'SETTINGS',
      tabBarIcon: () => (
        <Icon name="ios-settings" size={24} />
      )
    }
  }
})
const AppStackNavigator = createStackNavigator({
  AppTabNavigator:{
    screen: AppTabNavigator,
    navigationOptions: ({navigation}) => ({
      title: 'Notes',
      headerLeft:(
        <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <View style={{paddingHorizontal:10}}> 
            <Icon name= "md-menu" size= {24} />
          </View>
        </TouchableOpacity>
      )
    })
  }
})/**/ 

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator //aca va authstack...
})

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator

})







