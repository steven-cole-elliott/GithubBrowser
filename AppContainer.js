'use strict';

import React, { Component } from 'react';
import { ActivityIndicator,
  Image,
  NavigatorIOS,
  StyleSheet,
  TabBarIOS,
  Text,
  TextInput,
  TouchableHighlight,
  View } from 'react-native';
import { Feed } from './Feed';
import { Search } from './Search';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarIOSItemText: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarIOSItem: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 4,
  }
});

export class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "Feed",
    }
  }

  render() {
    return (
        <TabBarIOS style={styles.container}>
          <TabBarIOS.Item
            style={styles.tabBarIOSItem}
            title="Feed"
            selected={this.state.selectedTab == "Feed"}
            onPress={() => this.setState({selectedTab: "Feed"})}
          >
            <NavigatorIOS
              style={{
                flex: 1
              }}
              initialRoute={{
                component: Feed,
                title: "Feed",
              }} />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            style={styles.tabBarIOSItem}
            title="Search"
            selected={this.state.selectedTab == "Search"}
            onPress={() => this.setState({selectedTab: "Search"})}
          >
          <NavigatorIOS
            style={{
              flex: 1
            }}
            initialRoute={{
              component: Search,
              title: "Search",
            }} />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            style={styles.tabBarIOSItem}
            title="Tab 3"
            selected={this.state.selectedTab == "Tab 3"}
            onPress={() => this.setState({selectedTab: "Tab 3"})}
          >
            <Text style={styles.tabBarIOSItemText}>
              Tab 3 in the app container...
            </Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            style={styles.tabBarIOSItem}
            title="Tab 4"
            selected={this.state.selectedTab == "Tab 4"}
            onPress={() => this.setState({selectedTab: "Tab 4"})}
          >
            <Text style={styles.tabBarIOSItemText}>
              Tab 4 in the app container...
            </Text>
          </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
}
