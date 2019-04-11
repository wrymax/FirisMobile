import React, { Component } from "react"
import {
  StyleSheet,
  Dimensions,
  ListView,
  Image,
  ScrollView,
  StatusBar,
  AsyncStorage,
  ActivityIndicator,
  TouchableOpacity
 } from 'react-native';
import Camera from 'react-native-camera'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text } from 'react-native'
import styled from 'styled-components'

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

class ScanFace extends Component {
  static navigationOptions = {
    header: null,
    };
    
  render() {
    return (
      <View style={styles.container}>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
            type={Camera.constants.Type.back}
            captureMode={Camera.constants.CaptureMode.still}
            captureTarget={Camera.constants.CaptureTarget.memory}
            captureQuality={Camera.constants.CaptureQuality.medium}
            playSoundOnCapture={true}>

            {/* <View style={[{ flex: 1 }]}>
              <Text>hi</Text>
            </View> */}

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

export default ScanFace