import React, { Component } from 'react'
import { StyleSheet, View, Image, FlatList, Alert, Text, ImageBackground, TouchableOpacity} from 'react-native'
import { Button } from '../components'
import styled from 'styled-components'
import MovieListItem from '../components/MovieListItem'
import ScrollableTab, { DefaultTabBar, ScrollableTabBar } from "../components/ScrollableTab";
import { connect } from 'react-redux'


import { NavigationActions } from '../utils'
import fakeMovies from '../test_data/fakeMovies'

@connect(({ app, Landing }, router) => ({ app, Landing, router }))
class Landing extends Component {
    constructor(props) {
        super(props);
    }
    _pressNextButton = (movie) => {
        this.props.dispatch(NavigationActions.navigate({ routeName: 'HomeNavigator'}))
    }
  render() {

      return (
        <TouchableOpacity onPress={this.props.onLandingClicked}>
            <ImageBackground source={require('../images/Onboarding.jpg')} style={{width: '100%', height: '100%'}}>
            {/* <Text>Inside</Text>
            <Button onPress={this.props.onLandingClicked}>Get started</Button> */}
            </ImageBackground>      
        </TouchableOpacity>
      );
  }
}
export default Landing