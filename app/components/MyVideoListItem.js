import React, { Component } from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import styled from 'styled-components'
import Video from 'react-native-video'
import { connect } from 'react-redux'
import { createAction, NavigationActions } from '../utils'
import { Button } from "../components";

class MyVideoListItem extends React.Component {
  _onPress = () => {
    this.props.onPressItem();
  };

  render() {
    // const textColor = this.props.selected ? 'red' : 'black';
    const {video} = this.props

    return (
      <TouchableOpacity onPress={this._onPress}>
        <ViewWrapper>
          <Image source={{uri: video.item.image}} style={{width: '40%', marginTop: 15, marginBottom: 15, marginLeft: 15}} />
          <MovieWrapper>
            <MovieName>{video.item.name}</MovieName>
            <Timeago>{video.item.time}</Timeago>
            <Status>{video.item.status}</Status>
          </MovieWrapper>
        </ViewWrapper>
      </TouchableOpacity>
    );
  }
}

const ViewWrapper = styled.View`
  backgroundColor: 'rgb(255,255,255)';
  /* marginBottom: 20; */
  borderBottomColor: #EEE;
  borderBottomWidth: 1;
  flex: 1;
  flexDirection:row;
  /* alignContent: center; */
  /* justifyContent: center; */
  height: 120;
  overflow: hidden;
`
const MovieWrapper = styled.View`
  paddingLeft: 18;
  paddingTop: 20;
  paddingBottom: 20;
  /* float: right; */
  width: 50%;
`
const MovieName = styled.Text`
  fontSize: 16;
  color: 'rgb(30,30,30)';
`

const Timeago = styled.Text`
  fontSize: 12;
  color: #777;
  marginTop: 5;
  marginBottom: 5;
`

const Status = styled.Text`
  fontSize: 16;
  color: #4366FF;
`

export default MyVideoListItem