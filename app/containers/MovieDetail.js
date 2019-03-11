import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Video from 'react-native-video'
import styled from 'styled-components'
import { connect } from 'react-redux'
// import { Button } from '../components'
import { createAction, NavigationActions } from '../utils'
import fakeCharacters from '../test_data/fakeCharacters'
import CharacterPicker from '../components/CharacterPicker'
import BottomFloatButton from '../components/BottomFloatButton'

@connect(({ currentUser }, router) => ({ currentUser, router }))
class MovieDetail extends Component {
  static navigationOptions = {
    title: 'MovieDetail',
  }

  renderCharacterPickers = () => {
    const state = this.props.navigation.state
    const { movie } = state.params
    const { currentUser } = this.props

    return fakeCharacters.map(character => 
      (
        <CharacterPicker 
          character={character} 
          movie={movie} 
          key={character.id}
          picked={character.id == currentUser.pickedCharacter && movie.id == currentUser.pickedMovie}
          pressCharacterPicker={this.pickCharacter} 
        />
      )
    )
  }

  pickCharacter = (payload) => {
    this.props.dispatch(createAction('currentUser/pickCharacter')(payload))
  }

  pressNextButton = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'ScanFace' }))
  }

  renderNextButton = () => {
    const { currentUser } = this.props
    if(currentUser.pickedCharacter && currentUser.pickedMovie) {
      return (
        <BottomFloatButton onPress={this.pressNextButton} />
      )
    }
  }

  componentWillUnmount() {
    this.props.dispatch(createAction('currentUser/cancelPickCharacter')())
  }

  render() {
    const state = this.props.navigation.state
    const { movie } = state.params
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
        { this.renderCharacterPickers() }
        { this.renderNextButton() }        
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
  marginLeft: 0;
  paddingLeft: 0;
  marginRight: 0;
  paddingRight: 0;
`
const Description = styled.Text`
  fontSize: 14;
  color: #666;
  marginBottom: 20;
  marginTop: 20;
  paddingLeft: 20;
  paddingRight: 20;
`

const Character = styled.Image`
  width: 40%;
  height: 100;
  marginBottom: 20;
`

// const NextButton = styled.Button`
//   width: 200;
//   height: 40;
//   backgroundColor: #4366FF;
//   color: white;
// `

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: 215,
  }
})

export default MovieDetail
