import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

const header_style = StyleSheet.create({

  header: {
    backgroundColor: '#000',
    flex: 1,
    height: 50,
  },

});


class HeaderComponent extends React.Component {

  render()
  {

    return (
        <View style={ header_style.header } >
          <Text>header</Text>
        </View>
      )

  }
  
}

export default HeaderComponent;