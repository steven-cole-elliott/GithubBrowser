'use strict';

import React, { Component } from 'react';
import { ActivityIndicator,
  Image,
  ListView,
  Text,
  TouchableHighlight,
  View } from 'react-native';
import { Details } from './Details';


export class Feed extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(['A','B', 'C'])
    };

    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
    this.fetchFeed = this.fetchFeed.bind(this);
  }

  componentDidMount() {
    // this.fetchFeed();
  }

  fetchFeed(){
      
    // })
  }

  pressRow(rowData) {
    console.log(rowData);
    this.props.navigator.push({
      title: "Details",
      component: Details,
      passProps: {
        detailsData: rowData
      }
    });
  }

  renderRow(rowData) {
    return (
      <TouchableHighlight
        onPress={() => this.pressRow(rowData)}
        underlayColor={"#ddd"}
      >
        <View style={{
          flex: 1,
          flexDirection: 'row',
          borderColor: "#D7D7D7",
          borderBottomWidth: 1,
          padding: 20,
        }}>
          <Text>{rowData}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={{flex: 1,}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow} />
      </View>
    );
  }
}
