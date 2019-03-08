import React, { Component } from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import styled from 'styled-components'

class MovieListItem extends React.Component {
  _onPress = () => {
    console.log(this.props)
    this.props.onPressItem(this.props.movie);
  };

  render() {
    // const textColor = this.props.selected ? 'red' : 'black';
    const {movie} = this.props

    return (
      <TouchableOpacity onPress={this._onPress}>
        <ViewWrapper>
          <Image source={{uri: movie.item.image}} style={{width: '100%', height: 200}} />
          <MovieWrapper>
            <MovieName>{movie.item.name}</MovieName>
          </MovieWrapper>
        </ViewWrapper>
      </TouchableOpacity>
    );
  }
}

const ViewWrapper = styled.View`
  backgroundColor: 'rgb(255,255,255)';
  marginBottom: 20;
`
const MovieWrapper = styled.View`
  paddingLeft: 18;
  paddingTop: 20;
  paddingBottom: 20;
`
const MovieName = styled.Text`
  fontSize: 18;
  
  color: 'rgb(30,30,30)';
`

export default MovieListItem