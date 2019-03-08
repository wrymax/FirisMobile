import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Video from 'react-native-video'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Button } from '../components'
import { NavigationActions } from '../utils'

@connect()
class MovieDetail extends Component {
  static navigationOptions = {
    title: 'MovieDetail',
  }

  render() {
    const state = this.props.navigation.state
    const { movie } = state.params
    console.log(movie)
    return (
      <MovieView style={styles.container}>
        <Video 
          source={{uri: movie.video_uri }}
          style={styles.video}
          ref={(ref) => {
            this.player = ref
          }}
        >
        </Video>
        <Description>{movie.description}</Description>
        <SelectCharacter>
          <Character source={{uri: movie.image}} />
          <Character source={{uri: movie.image}} />
        </SelectCharacter>
        <SelectCharacter>
          <Character source={{uri: movie.image}} />
          <Character source={{uri: movie.image}} />
        </SelectCharacter>
      </MovieView>
    )
  }
}

const MovieView = styled.View`
  backgroundColor: white;
`
const Description = styled.Text`
  fontSize: 14;
  color: #666;
`

const SelectCharacter = styled.View`
  paddingTop: 20;
  paddingLeft: 20;
  paddingRight: 20;
  flex: 1;
  justifyContent: space-evenly;
  flexDirection: row;
  height: 400;
  width: 100%;
  backgroundColor: white;
`

const Character = styled.Image`
  width: 45%;
  height: 100;
`

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: 300
  }
})

export default MovieDetail
