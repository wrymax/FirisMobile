import React, { Component } from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

class CharacterPicker extends Component {
  _pressCharacterPicker = () => {
    const { movie, character } = this.props
    
    this.props.pressCharacterPicker({
      pickedMovie: movie.id, 
      pickedCharacter: character.id
    })
  }

  renderCheckMask = () => {
    if(this.props.picked) {
      return (
        <PickedCheckMask>
          <Check>️️️✔</Check>
        </PickedCheckMask>
      )
    }
  }

  render() {
    const { character } = this.props

    return (
      <Card onPress={this._pressCharacterPicker}>
        <CharacterImage source={{uri: character.image}} style={styles.characterImage} />
        { this.renderCheckMask() }        
      </Card>
    )
  }
}

const Card = styled.TouchableOpacity`
  width: 40%;
  height: 100;
  marginBottom: 20;
  position: relative;
`

// const CheckMask = styled.View`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   zIndex: 0;
//   backgroundColor: yellow;
//   opacity: 0.9;
// `
const PickedCheckMask = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  zIndex: 2;
  backgroundColor: yellow;
  opacity: 0.9;
`

const CharacterImage = styled.Image`
  width: 100%;
  height: 100%;
  zIndex: 1;
`

const Check = styled.Text`
  fontSize: 30;
  color: blue;
  width: 100%;
  text-align: center;
  marginTop: 30;
`

const styles = StyleSheet.create({
  characterImage: {
  }
})

export default CharacterPicker