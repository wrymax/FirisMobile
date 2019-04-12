import React, { Component } from 'react'
import {
  Text,
} from 'react-native'
import { connect } from 'react-redux'

import ScrollableTabView,{ScrollableTabBar}  from 'react-native-scrollable-tab-view'

@connect(({ currentUser }, router) => ({ currentUser, router }))
class ScrollableTab extends Component {
    render() {
        return (
            <View>
              <ScrollPlaceholder></ScrollPlaceholder>
              <ScrollableTabView
                  style={styles.ScrollableTabView}
                  initialPage={this.props.initialPage}
                  renderTabBar={() => <ScrollableTabBar />}
                  tabBarPosition='top'
                  
              >
                  <Text tabLabel='TOP'>My</Text>
                  <Text tabLabel='MOST RECENT'>favorite</Text>
                  <Text tabLabel='MY VIDEOS'>project</Text>
                  <Text tabLabel='COMMUNITY'>My</Text>
              </ScrollableTabView>
            </View>
        );
    }
  }

export default ScrollableTab