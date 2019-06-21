import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HeaderComponent from './../components/HeaderComponent'
import FooterComponent from './../components/FooterComponent'
import PostComponent from 	'./../components/Post/Post'

const feed_style = StyleSheet.create({

	container: {
		backgroundColor: '#A885E5',
		flex:1,
		flexDirection: 'column',
		display: 'flex',
	},

	header: {
		height: 50,
	},

	container_feed: {
      flex: 4,
      padding: 15,
      flexDirection: 'column',
      display: 'flex',
    },

    container_button_new_post: {
    	width: 50,
    	height: 50,
    	position: 'absolute',
    	fontSize: 30,
    	bottom: 20,
    	right: 20,
    },

    button_new_post: {
    	width: 50,
    	height: 50,
    	color: '#FFFFFF',
    	backgroundColor: '#555',
    	fontSize: 30,
    	borderRadius: 10,
    	lineHeight: 50,
    	textAlign: 'center',
    },

    container_feed: {

    }

});


class FeedScreen extends React.Component {

  render()
  {

    return (
        <View style={ feed_style.container } >

        	<HeaderComponent style={ feed_style.header} />

			<ScrollView style={ feed_style.container_feed } >
				
				<PostComponent />
				<PostComponent />
				<PostComponent />
				<PostComponent />
				<PostComponent />
				<PostComponent />
				<PostComponent />
				<PostComponent />
				<PostComponent />
				<PostComponent />
				<PostComponent />
				<PostComponent />
				<PostComponent />
				<PostComponent />
				<PostComponent />

			</ScrollView>

			<TouchableOpacity 
				style={feed_style.container_button_new_post}
	            onPress={ () => { this.props.navigation.navigate('CreatePublication') } }>
	          <Text
	            style={feed_style.button_new_post} >+</Text>
	        </TouchableOpacity>

		</View>
      )

  }
  
}

export default FeedScreen;