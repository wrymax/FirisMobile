import React, { Component } from "react"
import { StyleSheet, View, Text, Image } from 'react-native'
import styled from 'styled-components'
import BottomFloatButton from '../components/BottomFloatButton'
import ScrollableTab from "../components/ScrollableTab";
import { connect } from 'react-redux'
import { createAction, NavigationActions } from '../utils'
import fakeMovies from '../test_data/fakeMovies'
import MovieListItem from '../components/MovieListItem'

// @connect(({ app }) => ({ ...app }))
@connect(({ app, Home }, router) => ({ app, Home, router }))
class MyVideo extends Component {

    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
            source={require('../images/house.png')}
          />
        ),
    }

    // pressMovieItem = () => {
    //     this.props.dispatch(NavigationActions.navigate({ routeName: 'Home' }))
    // }

    _pressMovieItem = (movie) => {
        this.props.dispatch(NavigationActions.navigate({ routeName: 'MovieDetail', params: { movie: movie } }))
    }

    renderMovieItem = (movie, id) => {
        return (
        <MovieListItem 
            movie={movie}      
            onPressItem={this._pressMovieItem}   
        ></MovieListItem>
        )
    }
    keyExtractor = item => item.name

    render() {
        return (
            // <View style={styles.button}>
            //     <ScrollableTab initialPage={2}/>
            //     <Text>My Video</Text>
            //     <BottomFloatButton onPress={this.pressNextButton} />
            // </View>
            
            <View>
                <ScrollableTab initialPage={2}/>
                <MovieList
                    data={fakeMovies}
                    renderItem={this.renderMovieItem}
                    keyExtractor={this.keyExtractor}
                >
                </MovieList>
            </View>

        )
    }
}

const MovieList = styled.FlatList`
`

const styles = StyleSheet.create({
    icon: {
        width: 32,
        height: 32,
    },
    button: {
        flex: 1
    }
})

export default MyVideo