'use strict';

import React, { Component } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { AuthService } from './AuthService';
import { SearchResults } from './SearchResults';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF",
    flex: 1,
    padding: 10,
    paddingTop: 100,
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
});

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProgress: false,
    };

    this.onSearchPressed = this.onSearchPressed.bind(this);

  }

  onSearchPressed(){

    this.setState({showProgress: true});
    this.props.navigator.push({
      component: SearchResults,
      title: 'Results',
      passProps: {
        searchQuery: this.state.searchQuery
      }
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Search..."
        onChangeText={(text) => {this.setState({searchQuery: text});}}>

        </TextInput>
        <TouchableHighlight style={styles.button} onPress={this.onSearchPressed}>
          <Text style={styles.buttonText}>
            Search
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
