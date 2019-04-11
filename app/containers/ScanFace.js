import React, { Component } from "react"
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import BottomFloatButton from '../components/BottomFloatButton'
import styled from 'styled-components'
import { createAction, NavigationActions } from '../utils'

@connect(({ app }) => ({ ...app }))
class ScanFace extends Component {
  static navigationOptions = {
    title: 'ScanFace',
  }
  pressNextButton = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'MyVideo' }))
  }


  render() {
    return (
      <View style={styles.button}>
        
        <Text>Scan Face</Text>
        {console.log(this)}
        <BottomFloatButton onPress={this.pressNextButton} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1
  }
})


export default ScanFace
