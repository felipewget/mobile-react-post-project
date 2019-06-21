/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { createAppContainer } from 'react-navigation';

import Router       from './src/Router';

export default createAppContainer( Router );
