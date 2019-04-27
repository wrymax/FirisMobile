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

import Animation from 'lottie-react-native';
import anim from './../images/dataAll.json'

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
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
            type={Camera.constants.Type.front}
            mirrorImage={true}
            captureMode={Camera.constants.CaptureMode.still}
            captureTarget={Camera.constants.CaptureTarget.memory}
            captureQuality={Camera.constants.CaptureQuality.high}
            playSoundOnCapture={true}>

            {/* <View style={[{ flex: 1 }]}>
              <Text>hi</Text>
            </View> */}
            <Animation
              ref={animation => {
                this.animation = animation;
              }}
              style={{
                width: 280,
                height: 280,
              }}
              loop={true}
              source={anim}
              autoPlay={true}
            />

            <View style={[{ height: 70, bottom: 35 }]}>
              <TouchableOpacity
                style={[styles.cameraIco, { height: 72}]}
                onPress={this.takePicture}
              >
                <View>
                  <Icon
                    name="circle"
                    size={70}
                    color={'ffffff'}
                  />
                </View>
              </TouchableOpacity>
            </View> 

          </Camera>
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
