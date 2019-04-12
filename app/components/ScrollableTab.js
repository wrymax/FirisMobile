import React from 'react';
import styled from 'styled-components'
import {
  Text, StyleSheet, View
} from 'react-native';

import ScrollableTabView,{DefaultTabBar,ScrollableTabBar}  from 'react-native-scrollable-tab-view';


class ScrollableTab extends React.Component {

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
const styles = StyleSheet.create({
  ScrollableTabView: {
    position: "absolute",
    zIndex: 100,
    backgroundColor: 'white',
    height: 50
  }
})

const ScrollPlaceholder = styled.View`
  height: 50px;
  position: relative;
`


export default ScrollableTab