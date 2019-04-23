import React, { Component } from "react"
import { StyleSheet, View, Switch, Text, Image } from 'react-native'
import styled from 'styled-components'
import BottomFloatButton from '../components/BottomFloatButton'
import Video from 'react-native-video'
// import ScrollableTab from "../components/ScrollableTab";
import { connect } from 'react-redux'
import { createAction, NavigationActions } from '../utils'
import { Button } from "../components";

@connect(({ app }) => ({ ...app }))
class MyVideo extends Component {
    static navigationOptions = {
        header: null,
        title: 'Community',
        };

    pressNextButton = () => {
        this.props.dispatch(NavigationActions.navigate({ routeName: 'Home' }))
    }

    render() {
        let {movie} = this.props; // need to pass in video_uri, etc. from upper layer
        // fixed movie video_uri: for test only
        if (movie == null) {
            console.log("video uri not in movie")
            movie = {
                video_uri: "https://tmp-8w7v5lk69.now.sh/demo.MP4"
            }
            console.log("movie modified")
        }
        return (
            <MovieView style={styles.container}>
                {/* <ScrollableTab initialPage={2}/> */}
                <Video 
                    source={{uri: movie.video_uri }}
                    style={styles.video}
                    ref={(ref) => {
                        this.player = ref
                    }}
                    >
                </Video>
                <Description>feawfewa</Description>
                <ButtonView>
                    <Text>Public To Community</Text>
                    <Switch/>
                </ButtonView>
                {/* <BottomFloatButton onPress={this.pressNextButton} /> */}
                <ShareView style = {styles.share}>
                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                        <View style={{width: '33%', height: 50, backgroundColor: 'powderblue'}}> 
                            <Image source={require('../images/facebook.png')}></Image>
                        </View>
                        <View style={{width: '33%', height: 50, backgroundColor: 'skyblue'}} />
                        <View style={{width: '33%', height: 50, backgroundColor: 'steelblue'}} />
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                        <View style={{width: '33%', height: 50, backgroundColor: 'powderblue'}} />
                        <View style={{width: '33%', height: 50, backgroundColor: 'skyblue'}} />
                        <View style={{width: '33%', height: 50, backgroundColor: 'steelblue'}} />
                    </View>
                </ShareView>
            </MovieView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    video: {
        flex: 2
    },
    share: {
        flex: 3
    }
});
const ButtonView = styled.View`
    flexDirection: row;
    justifyContent: space-between;
`
const MovieView = styled.View`
    width: 100%
`
const IconBox = styled.View`
    width: 50;
    height:50;
    border-color: powderblue;
`
const Description = styled.Text`
`
const ShareView = styled.View`
`
export default MyVideo