'use strict';

import React, { Component } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { AuthService } from './AuthService';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF",
    flex: 1,
    padding: 4,
  },
  heading: {
    fontSize: 30,
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#48bbec",
  },
  button: {
    height: 50,
    backgroundColor: "#48bbec",
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 22,
    color: "#FFFFFF",
    alignSelf: "center",
  },
  errorMessage: {
    color: "red",
    padding: 10,
  },
  loader: {
    marginTop: 15,
  }
});

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProgress: false,
    };

    this.onLoginPressed = this.onLoginPressed.bind(this);
  }

  onLoginPressed(){

    this.setState({showProgress: true});

    let username = this.state.username;
    let password = this.state.password;

    let authService = new AuthService();
    authService.login({
      username,
      password
    }, (results) => {
      this.setState(Object.assign({
        showProgress: false
      }, results));

      if(results.success && this.props.onLogin) {
        this.props.onLogin();
      }
    });
  }

  render() {
    const displayErrorMessage =
      !this.state.success && this.state.errorMessage ? this.state.errorMessage : null;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Github Browser
        </Text>
        <TextInput style={styles.input} placeholder="Github username"
        onChangeText={(text) => {this.setState({username: text});}}>

        </TextInput>
        <TextInput style={styles.input} placeholder="Github password" secureTextEntry={true}
        onChangeText={(text) => {this.setState({password: text});}}>

        </TextInput>
        <TouchableHighlight style={styles.button} onPress={this.onLoginPressed}>
          <Text style={styles.buttonText}>
            Log In
          </Text>
        </TouchableHighlight>
        <Text style={styles.errorMessage}>
          {displayErrorMessage}
        </Text>
        <ActivityIndicator
          animating={this.state.showProgress}
          size="large"
          style={styles.loader} />
      </View>
    );
  }
}
