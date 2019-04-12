import React, { Component } from "react"
import { StyleSheet, View, Text, Image } from 'react-native'
import styled from 'styled-components'
import BottomFloatButton from '../components/BottomFloatButton'
import ScrollableTab from "../components/ScrollableTab";
import { connect } from 'react-redux'
import { createAction, NavigationActions } from '../utils'
import fakeMyVideos from '../test_data/fakeMyVideos'
import MyVideoListItem from '../components/MyVideoListItem'

// @connect(({ app }) => ({ ...app }))
@connect(({ app, Home }, router) => ({ app, Home, router }))
class MyVideos extends Component {
    static navigationOptions = {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
          source={require('../images/house.png')}
        />
      ),
    }

    _pressMovieItem = (video) => {
      this.props.dispatch(NavigationActions.navigate({ routeName: 'MyVideo', params: { video: video } }))
    }

    renderVideoItem = (video, id) => {
        return (
        <MyVideoListItem 
          video={video}      
          onPressItem={this._pressVideoItem}   
        ></MyVideoListItem>
        )
    }
    keyExtractor = item => item.name

    render() {
        return (
          <View>
              <ScrollableTab initialPage={2}/>
              <MovieList
                data={fakeMyVideos}
                renderItem={this.renderVideoItem}
                keyExtractor={this.keyExtractor}
              >
              </MovieList>
          </View>
        )
    }
}

const MovieList = styled.FlatList`
`

const styles = StyleSheet.create({
    icon: {
        width: 32,
        height: 32,
    },
    button: {
        flex: 1
    }
})

export default MyVideos