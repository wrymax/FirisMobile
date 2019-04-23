import React, { Component } from "react"
import { StyleSheet, View, Switch, Text, Image } from 'react-native'
import styled from 'styled-components'
import BottomFloatButton from '../components/BottomFloatButton'
import Video from 'react-native-video'
// import ScrollableTab from "../components/ScrollableTab";
import { connect } from 'react-redux'
import { createAction, NavigationActions } from '../utils'
import { Button } from "../components"

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
                <View style={styles.top}>
                    <Video 
                        source={{uri: movie.video_uri }}
                        style={styles.video}
                        controls={true}
                        ref={(ref) => {
                            this.player = ref
                        }}
                        >
                    </Video>
                    <Description>
                        <DescTitle>Marvels Studios' Avengers - Firis Trailer</DescTitle>
                        <DescTime>15 hours ago</DescTime>
                        <DescMore>
                            Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his...
                        </DescMore>
                        <ButtonView>
                            <Text style={{lineHeight: 35}}>Public To Community</Text>
                            <Switch />
                        </ButtonView>
                    </Description>
                </View>
                
                {/* <BottomFloatButton onPress={this.pressNextButton} /> */}
                <ShareView>
                    <View style={{flexDirection: 'row', marginBottom: 10, alignItems: 'space-between', justifyContent: 'space-around'}}>
                        <View style={{flex: 1, alignItems: 'center'}}> 
                            <Image source={require('../images/facebook.png')}></Image>
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}> 
                            <Image source={require('../images/twitter.png')}></Image>
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}> 
                            <Image source={require('../images/youtube-play.png')}></Image>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                        <View style={{flex: 1, alignItems: 'center'}}>  
                            <Image source={require('../images/instagram.png')}></Image>
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}> 
                            <Image source={require('../images/WeChat.png')}></Image>
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}> 
                            <Image source={require('../images/Weibo.png')}></Image>
                        </View>
                    </View>
                </ShareView>
            </MovieView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    top: {
        flex: 1,
        height: 100,
        // alignItems: 'flex-start'
    },
    video: {
        // flex: 1,
        width: '100%',
        height: 200
    },
    bottom: {
        flex: 1
    }
});

const DescTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    width: 100%;
`
const DescTime = styled.Text`
    font-size: 12px;
    color: #999;
    margin-top: 10px;
    margin-bottom: 10px;
`

const DescMore = styled.Text`
    font-size: 12px;
`

const ButtonView = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    margin-top: 20px;
`
const MovieView = styled.View`
    width: 100%
`
const IconBox = styled.View`
    width: 50;
    height: 50;
    border-color: powderblue;
`
const Description = styled.View`
    padding: 20px;
    border-color: #EEE;
    border-width: 1;
`
const ShareView = styled.View`
    padding: 10%;
    align-items: flex-start;
    flex: 1;
    margin-top: 200;
    justify-content: space-around;
`
export default MyVideo