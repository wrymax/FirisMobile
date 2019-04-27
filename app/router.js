import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing, Image, StyleSheet } from 'react-native'

import {
  createStackNavigator,
  createBottomTabNavigator,
  NavigationActions,
  createMaterialTopTabNavigator,
} from 'react-navigation'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'


import { connect } from 'react-redux'

import Home from './containers/Home'
import Account from './containers/Account'

import Loading from './containers/Loading'
import Login from './containers/Login'

import MovieDetail from './containers/MovieDetail'
import ScanFace from './containers/ScanFace'
import MyVideo from './containers/MyVideo'
import MyVideos from './containers/MyVideos'

// always pin on bottom of the screen
const HomeNavigator = createMaterialTopTabNavigator({
  home: { screen: Home },
  MyVideos: { screen: MyVideos },
  MyVideo: { screen: MyVideo }
}, {
  tabBarOptions: {
      scrollEnabled: true,
      labelStyle: {
          fontSize: 12,
          color: 'black'
      },
      style: {
        backgroundColor: 'white',
      },
      indicatorStyle: {
        backgroundColor: '#4366FF',
      }
  },
});



// give the title of the page
HomeNavigator.navigationOptions = ({ navigation }) => {
  console.log(navigation)

  const { routeName } = navigation.state.routes[navigation.state.index]
  if (routeName == "MyVideo") return {title : "MY VIDEOS"}
  return {
    headerBackground: (
      <Image
        style={{alignSelf: 'center', resizeMode: 'contain', height: 27, bottom: -48}}
        source={require('./images/logo.png') }
      />
    ),
  }
}

const MainNavigator = createStackNavigator(
  {
    HomeNavigator: { screen: HomeNavigator },
    MovieDetail: { screen: MovieDetail },
    ScanFace: { screen: ScanFace },
  },
  {
    headerMode: 'float',

  }
)

const AppNavigator = createStackNavigator(
  {
    Main: { screen: MainNavigator },
    Login: { screen: Login },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
      },
    }),
  }
)





export const routerReducer = createNavigationReducer(AppNavigator)
export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
)
const App = reduxifyNavigator(AppNavigator, 'root')





function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}





@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getActiveRouteName(this.props.router)
    if (currentScreen === 'Profile') {
      return true
    }
    if (currentScreen !== 'FIRIS') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const { app, dispatch, router } = this.props
    if (app.loading) return <Loading />

    return <App dispatch={dispatch} state={router} />
  }
}






export default Router
