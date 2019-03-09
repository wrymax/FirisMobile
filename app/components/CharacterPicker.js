import React, { Component } from 'react'
import { View, Image } from 'react-native'
import styled from 'styled-components'

class CharacterPicker extends Component {
  render() {
    const { character } = this.props

    return (
      <Card>
        <CharacterImage source={character.image} />
        <CheckMask />
      </Card>
    )
  }
}

const Card = styled.View`
  width: 40%;
  height: 100;
  marginBottom: 20;
  position: relative;
`

const CheckMask = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  zIndex: 0;
`

const CharacterImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  zIndex: 1;
`


export default CharacterPicker