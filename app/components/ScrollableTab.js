import React from 'react';
import styled from 'styled-components'
import {
  Text, StyleSheet
} from 'react-native';

import ScrollableTabView,{DefaultTabBar,ScrollableTabBar}  from 'react-native-scrollable-tab-view';


class ScrollableTab extends React.Component {

    render() {
        return (
            
            <ScrollableTabView
                style={styles.ScrollableTabView}
                // initialPage={0}
                renderTabBar={() => <ScrollableTabBar />}
                tabBarPosition='top'
                
            >
                <Text tabLabel='TOP'>My</Text>
                <Text tabLabel='MOST RECENT'>favorite</Text>
                <Text tabLabel='MY VIDEOS'>project</Text>
                <Text tabLabel='COMMUNITY'>My</Text>
            </ScrollableTabView>
        );
    }
}
const styles = StyleSheet.create({
  ScrollableTabView: {
    // position: "absolute",
    // zIndex: 100,
    backgroundColor: 'white',
    height: 40
  }
})


export default ScrollableTab