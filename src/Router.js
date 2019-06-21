import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import FeedScreen               from './screens/FeedScreen';
import LoginScreen              from './screens/LoginScreen';
import RegisterScreen           from './screens/RegisterScreen';
import CreatePublicationScreen  from './screens/CreatePublicationScreen';

import { createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Feed: {
    screen: FeedScreen,
  },
  CreatePublication: {
    screen: CreatePublicationScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
},{
  headerMode: 'none'
});

export default AppNavigator;