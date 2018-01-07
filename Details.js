'use strict';

import React, { Component } from 'react';
import { ActivityIndicator,
  Image,
  ListView,
  Text,
  TouchableHighlight,
  View } from 'react-native';


export class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: props.detailsData
    };
  }



  render() {
    return (
      <View style={{flex: 1,
      paddingTop: 80,
      justifyContent: 'flex-start',
      alignItems: 'center',}}>
        <Text>{this.state.details}</Text>
      </View>
    );
  }
}
