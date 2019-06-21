import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

const post_style = StyleSheet.create({

	container: {
		width: '90%',
		marginLeft: '5%',
		marginRight: '5%',
    marginBottom: 10,
		backgroundColor: '#EFEFEF',
    overflow: 'hidden',
    borderRadius: 3,
	},

  container_profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    alignItems: 'stretch',
    flexWrap: 'wrap',
  },

  username: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 5,
    fontSize: 14,
    color: '#555'
  },

  data_hour: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 5,
    fontSize: 12,
    color: '#777'
  },

  container_category: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    width: '100%',
    alignItems: 'stretch',
    flexWrap: 'wrap',
  },

	category: {
    textAlign: 'left',
    margin: 5,
    padding: 5,
    backgroundColor: '#555555'
  },

  container_text: {
    padding: 5,
    fontSize: 14,
    color: '#555'
  }

});

class Post extends React.Component {

  render()
  {

    return (
        <View style={ post_style.container } >
          <View style={ post_style.container_profile }>
          	<Text style={ post_style.username }>Felipe Oliveira</Text>
          	<Text style={ post_style.data_hour }>12/08/2019 as 15:09</Text>
          </View>

          <View style={ post_style.container_category }>
          	<Text style={ post_style.category }>Categoria</Text>
          	<Text style={ post_style.category }>Categoria</Text>
          	<Text style={ post_style.category }>Categoria</Text>
          	<Text style={ post_style.category }>Categoria</Text>
          	<Text style={ post_style.category }>Categoria</Text>
          </View>

          <Text style={ post_style.container_text} >Texto que vou digitar</Text>

      	{/* @TODO, se tiver midia */}
        <Image style={{width: 66, height: 58}} source={{ uri:  'https://abrilvejasp.files.wordpress.com/2019/03/imagem-e-palavra-c2a9casaazulfilms-ecrannoir-4.jpg?quality=70&strip=info&w=928' }} />

        </View>
      )

  }
  
}

export default Post;