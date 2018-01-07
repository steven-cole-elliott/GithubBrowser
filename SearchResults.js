'use strict';

import React, { Component } from 'react';
import { ActivityIndicator,
  Image,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View } from 'react-native';


export class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.state = {
      searchQuery: props.searchQuery,
      dataSource: ds.cloneWithRows([]),
      showProgress: true,
    };

    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  componentDidMount() {
    // this.fetchFeed();
    this.doSearch();
  }

  doSearch(){
      console.log(`Doing search for ${this.state.searchQuery}`);
    // })
      var url = "https://api.github.com/search/repositories?q=" +
        encodeURIComponent(this.state.searchQuery);

      fetch(url)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            repositories: responseData.repositories,
            dataSource: this.state.dataSource.cloneWithRows(responseData.items)
          });
        })
        .finally(() => {
          this.setState({
            showProgress: false
          })
        });
  }

  pressRow(rowData) {
    console.log(rowData);
    // this.props.navigator.push({
    //   title: "Details",
    //   component: Details,
    //   passProps: {
    //     detailsData: rowData
    //   }
    // });
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

          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginTop: 10,
            marginBottom: 10,
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: '600'
            }}>{rowData.full_name}</Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>
                Star Gazers: {rowData.stargazers_count}
              </Text>
              <Text>
                Open Issues: {rowData.open_issues_count}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    const showProgress = () => {
      if(this.state.showProgress) {
        return (
          <ActivityIndicator
            animating={this.state.showProgress}
            size="large"
            style={{marginTop: 100}}/>
        );
      } else {
        return null;
      }
    }

    return (
      <View style={{flex: 1,}}>
        {showProgress()}
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow} />

      </View>
    );
  }
}

var styles = StyleSheet.create({
  repoCell: {
    width: 50,
    alignItems: 'center',
  },
  repoCellIcon: {
    width: 20,
    height: 20
  },
  repoCellLabel: {
    textAlign: 'center',
  }
})
