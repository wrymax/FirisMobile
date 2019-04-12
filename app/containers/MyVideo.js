import React, { Component } from "react"
import { StyleSheet, View, Text } from 'react-native'
import styled from 'styled-components'
import BottomFloatButton from '../components/BottomFloatButton'
import Video from 'react-native-video'
// import ScrollableTab from "../components/ScrollableTab";
import { connect } from 'react-redux'
import { createAction, NavigationActions } from '../utils'

@connect(({ app }) => ({ ...app }))
class MyVideo extends Component {
    static navigationOptions = {
        title: "2333"
    }

    pressNextButton = () => {
        this.props.dispatch(NavigationActions.navigate({ routeName: 'Home' }))
    }

    render() {
        let {movie} = this.props; // need to pass in video_uri, etc. from upper layer
        // fixed movie video_uri: for test only
        if (movie == null) {
            console.log("video uri not in movie")
            movie = {
                video_uri: "https://video-mxiptovpbs.now.sh/test.mp4"
            }
            console.log("movie modified")
        }
        return (
            <View style={styles.container}>
                {/* <ScrollableTab initialPage={2}/> */}
                <Video 
                    source={{uri: movie.video_uri }}
                    style={styles.video}
                    ref={(ref) => {
                        this.player = ref
                    }}
                    >
                </Video>
                <Text>Jerk!!</Text>
                {/* <BottomFloatButton onPress={this.pressNextButton} /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    video: {
        flex: 2
    }
})

export default MyVideo