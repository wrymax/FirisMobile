import React, { Component } from "react"
import { StyleSheet, View, Text } from 'react-native'
import styled from 'styled-components'
import BottomFloatButton from '../components/BottomFloatButton'
import ScrollableTab from "../components/ScrollableTab";
import { connect } from 'react-redux'
import { createAction, NavigationActions } from '../utils'

@connect(({ app }) => ({ ...app }))
class MyVideo extends Component {
    static navigationOptions = {
        title: 'MyVideo',
    }

    pressNextButton = () => {
        this.props.dispatch(NavigationActions.navigate({ routeName: 'Home' }))
    }

    render() {
        return (
            <View style={styles.button}>
                <ScrollableTab initialPage={2}/>
                <Text>My Video</Text>
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

export default MyVideo