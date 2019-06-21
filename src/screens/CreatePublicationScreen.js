import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView, List } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HeaderComponent from './../components/HeaderComponent'
import FooterComponent from './../components/FooterComponent'
import PostComponent from 	'./../components/Post/Post'

const create_publication_style = StyleSheet.create({

});


class CreatePublicationScreen extends React.Component {

	constructor( props )
	{

		super( props );

		this.state = {
			text: '',
			categorys: [
				'cateo1',
				'cateo2',
				'cateo3',
			]
		};

	}

	render()
	{

		let self = this;
		var { categorys } = this.state;

		return (
			<View>
				<Text>My Publication</Text>

				<TextInput
				    multiline={true}
				    numberOfLines={4}
				    onChangeText={(text) => this.setState({text})}
				    value={this.state.text}/>        	

				<View>
				  	{
					    categorys.map(( category ) => {

					    	return (<Text> category </Text>);

					    })
					}
				</View>


			</View>
		)

	}
  
}

export default CreatePublicationScreen;
