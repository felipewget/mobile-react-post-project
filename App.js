/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';

const login_style = StyleSheet.create({
    container: {
      backgroundColor: '#A885E5',
      flex:1,
      flexDirection: 'column',
      display: 'flex',
    },
    container_form_login: {
      flex: 4,
      padding: 15,
      flexDirection: 'column',
      display: 'flex',
    },
    container_button_register: {
      flex: 1,
      padding: 15,
      borderTopColor: '#6441A4',
      borderStyle: 'solid',
      borderTopWidth: 1,
    },
    centralize_form_login: {
      flex: 1,
      justifyContent: 'center', 
    },
    centralize_form_register: {
      flex: 1,
      justifyContent: 'center', 
    },
    title_form: {
      color: '#FFFFFF',
      fontSize: 17,
      marginBottom: 5,
    },
    input: {
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: '#EFEFEF',
      borderColor: '#AAA',
      marginBottom: 5,
    },
    button: {
      backgroundColor: '#6441A4',
      color: '#6441A4',
      padding: 8,
    },
    button_text: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontSize: 16
    }
  });

  const register_style = StyleSheet.create({
    container: {
      backgroundColor: '#A885E5',
      flex:1,
      flexDirection: 'column',
      display: 'flex',
    },
    container_form_login: {
      flex: 4,
      padding: 15,
      flexDirection: 'column',
      display: 'flex',
    },
    container_button_register: {
      flex: 1,
      padding: 15,
      borderTopColor: '#6441A4',
      borderStyle: 'solid',
      borderTopWidth: 1,
    },
    centralize_form_login: {
      flex: 1,
      justifyContent: 'center', 
    },
    centralize_form_register: {
      flex: 1,
      justifyContent: 'center', 
    },
    title_form: {
      color: '#FFFFFF',
      fontSize: 17,
      marginBottom: 5,
    },
    input: {
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: '#EFEFEF',
      borderColor: '#AAA',
      marginBottom: 5,
    },
    button: {
      backgroundColor: '#6441A4',
      color: '#6441A4',
      padding: 8,
    },
    button_text: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontSize: 16
    }
  });

class LoginScreen extends React.Component {

  constructor( props )
  {

    super(props);

    this.state = {
      form_loading: false,
      mail: '',
      password: '',
    }

  }

  onChangeHandler(field, value) {
    this.setState({
      [field]: value
    });
  }

  renderForm()
  {

    return (
      <View  style={login_style.centralize_form_login}>

        <Text
          style={ login_style.title_form }>Fazer Login</Text>

        <TextInput
            style={login_style.input}
            placeholder="Digite seu e-mail"
            value={this.state.mail}
            onChangeText={value => this.onChangeHandler('mail', value)}
            keyboardType="email-address" />

        <TextInput
            style={login_style.input}
            placeholder="Senha"
            value={this.state.password}
            secureTextEntry={true} 
            onChangeText={value => this.onChangeHandler('password', value)}  />

        <TouchableOpacity 
            style={login_style.button}
            onPress={ () => { this.setState({ form_loading: true }) } }>
          <Text
            style={login_style.button_text} >Realizar Login</Text>
        </TouchableOpacity>

      </View>
      );

  }

  renderLoading()
  {

    return (
      <View  style={login_style.centralize_form_login}>
        <Text>Autenticando...</Text>
      </View>
      );

  }

  render()
  {

    const { form_loading } = this.state;

    return (
      <View style={login_style.container}>

        <View style={login_style.container_form_login}>

          { form_loading ? this.renderLoading() : this.renderForm() }          

        </View>

        <View style={login_style.container_button_register}>

          <View  style={login_style.centralize_form_register}>

            <TouchableOpacity 
                style={login_style.button}
                onPress={ () => this.props.navigation.navigate('Register') }>
              <Text
                style={login_style.button_text} >Criar Minha Conta</Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>
    )

  }

} 

class RegisterScreen extends React.Component {
  
  constructor( props )
  {

    super(props);

    this.state = {
      form_loading: false,
      name: '',
      mail: '',
      password: '',
    }

  }

  onChangeHandler(field, value) {
    this.setState({
      [field]: value
    });
  }

  renderForm()
  {

    return (
      <View  style={register_style.centralize_form_login}>

        <Text
          style={ register_style.title_form }>Me Cadastrar</Text>

        <TextInput
          style={register_style.input}
          placeholder="Nome"
          value={this.state.name}
          onChangeText={value => this.onChangeHandler('name', value)}
          keyboardType="email-address" />

        <TextInput
            style={register_style.input}
            placeholder="Digite seu e-mail"
            value={this.state.mail}
            onChangeText={value => this.onChangeHandler('mail', value)}
            keyboardType="email-address" />

        <TextInput
            style={register_style.input}
            placeholder="Senha"
            value={this.state.password}
            secureTextEntry={true} 
            onChangeText={value => this.onChangeHandler('password', value)}  />

        <TouchableOpacity 
            style={register_style.button}
            onPress={ () => { this.setState({ form_loading: true }) } }>
          <Text
            style={register_style.button_text} >Me Cadastrar</Text>
        </TouchableOpacity>

      </View>
      );

  }

  renderLoading()
  {

    return (
      <View  style={register_style.centralize_form_login}>
        <Text>Cadastrando...</Text>
      </View>
      );

  }

  render()
  {

    const { form_loading } = this.state;

    return (
      <View style={register_style.container}>

        <View style={register_style.container_form_login}>

          { form_loading ? this.renderLoading() : this.renderForm() }          
          
        </View>

        <View style={register_style.container_button_register}>

          <View  style={register_style.centralize_form_register}>

            <TouchableOpacity 
                style={register_style.button}
                onPress={ () => this.props.navigation.navigate('Login') }>
              <Text
                style={register_style.button_text} >Voltar ao Login</Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>
    )

  }

} 

class FeedScreen extends React.Component {


  render()
  {

    return (
        <View>
          <Text>Feed</Text>
        </View>
      )

  }
  
} 

import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
    Login: {
      screen: LoginScreen,
    },
  Register: {
      screen: RegisterScreen,
    },
  Feed: {
      screen: FeedScreen,
    },
},{
  headerMode: 'none'
});

export default createAppContainer(AppNavigator);
