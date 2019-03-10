import React, { Component } from 'react'
import { StyleSheet, View, Image, FlatList, Alert, Text } from 'react-native'
import styled from 'styled-components'
import MovieListItem from '../components/MovieListItem'
import { connect } from 'react-redux'

import { Button } from '../components'

import { NavigationActions } from '../utils'
import fakeMovies from '../test_data/fakeMovies'

@connect(({ app, Home }, router) => ({ app, Home, router }))
class Home extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/house.png')}
      />
    ),
  }

  _pressMovieItem = (movie) => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'MovieDetail', params: { movie: movie } }))
  }

  keyExtractor = item => item.name

  renderMovieItem = (movie, id) => {
    return (
      <MovieListItem 
        movie={movie}      
        onPressItem={this._pressMovieItem}   
      ></MovieListItem>
    )
  }

  render() {
    return (      
      <MovieList
        data={fakeMovies}
        renderItem={this.renderMovieItem}
        keyExtractor={this.keyExtractor}
      ></MovieList>
    );
  }
}

const MovieList = styled.FlatList`

`

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
})

export default Home