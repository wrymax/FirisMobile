import React, { Component } from 'react'
// import { } from 'react-native'
import styled from 'styled-components'

class BottomFloatButton extends Component {
  
  render() {
    return (
      <ButtonWrapper onPress={this.props.onPress}>
        <ButtonText>{this.props.text || 'Next'}</ButtonText>
      </ButtonWrapper>
    )
  }
}

const ButtonWrapper = styled.TouchableOpacity`
  width: 60%;
  left: 20%;
  position: absolute;
  bottom: 80;
  height: 50;
  zIndex: 10;
  backgroundColor: #4366FF;
  flex: 1;
  alignContent: center;
  borderRadius: 10;
`

const ButtonText = styled.Text`
  width: 100%;
  textAlign: center;
  color: white;
  marginTop: 12;
  fontSize: 20
`

export default BottomFloatButton