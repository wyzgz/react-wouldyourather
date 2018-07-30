import {combineReducers} from 'redux'
import users from '../reducers/users'
import questions from '../reducers/questions'
import loggedInUser from '../reducers/loggedInUser'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  users,
  questions,
  loggedInUser,
  loadingBar: loadingBarReducer,
})
