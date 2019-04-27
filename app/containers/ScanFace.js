import React, { Component } from "react"
import {
  StyleSheet,
  Dimensions,
  ListView,
  Image,
  View,
  Text,
  ScrollView,
  StatusBar,
  AsyncStorage,
  ActivityIndicator,
  TouchableOpacity
 } from 'react-native'
import { NavigationActions } from '../utils'
import { connect } from 'react-redux'
import Camera from 'react-native-camera'
import Icon from 'react-native-vector-icons/FontAwesome'
import LottieView from 'lottie-react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  }
});

@connect(({ currentUser }, router) => ({ currentUser, router }))
class ScanFace extends Component {
  static navigationOptions = {
    header: null,
    title: 'ScanFace',
    };
    
  takePicture = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'MyVideos' }))
  }

  render() {
    return (
      <View style={styles.container}>
          <LottieView source={require('./../images/FaciaRecMotiondata.json')} autoPlay loop />;
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   button: {
//     flex: 1
//   }
// })


export default ScanFace
