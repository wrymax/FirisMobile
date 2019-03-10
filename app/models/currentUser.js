import { createAction, NavigationActions, Storage } from '../utils'
import * as authService from '../services/auth'

export default {
  namespace: 'currentUser',
  state: {
    pickedMovie: null,
    pickedCharacter: null
  },
  reducers: {    
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    // *loadStorage(action, { call, put }) {
    //   const login = yield call(Storage.get, 'login', false)
    //   yield put(createAction('updateState')({ login, loading: false }))
    // },
    *pickCharacter({ payload }, { call, put }) {
      yield put(createAction('updateState')(payload))
      // const login = yield call(authService.login, payload)
      // if (login) {
      //   yield put(NavigationActions.back())
      // }
      // yield put(createAction('updateState')({ login, fetching: false }))
      // Storage.set('login', login)
    },
    *cancelPickCharacter({}, { call, put }) {
      yield put(createAction('updateState')({
        pickedMovie: null,
        pickedCharacter: null
      }))
    }
    // *logout(action, { call, put }) {
    //   yield call(Storage.set, 'login', false)
    //   yield put(createAction('updateState')({ login: false }))
    // },
  },
  subscriptions: {
    // setup({ dispatch }) {
    //   dispatch({ type: 'loadStorage' })
    // },
  },
}