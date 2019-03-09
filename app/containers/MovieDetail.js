import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Video from 'react-native-video'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Button } from '../components'
import { NavigationActions } from '../utils'
import fakeCharacters from '../test_data/fakeCharacters'
// import CharacterPicker from '../components/CharacterPicker'

@connect()
class MovieDetail extends Component {
  static navigationOptions = {
    title: 'MovieDetail',
  }

  renderCharacterPickers = () => {
    return fakeCharacters.map(character => (<CharacterPicker character={character} />))
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
        {/* { this.renderCharacterPickers() } */}
        <Character source={{uri: movie.image}} />
        <Character source={{uri: movie.image}} />
        <Character source={{uri: movie.image}} />
        <Character source={{uri: movie.image}} />
        
      </MovieView>
    )
  }
}

const MovieView = styled.View`
  backgroundColor: white;
  flex: 1;
  justifyContent: space-evenly;
  flexDirection: row;
  flexWrap: wrap;
`
const Description = styled.Text`
  fontSize: 14;
  color: #666;
  marginBottom: 20;
`

const Character = styled.Image`
  width: 40%;
  height: 100;
  marginBottom: 20;
`

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: 300
  }
})

export default MovieDetail
