import {SET_LOGGEDIN_USER, USER_LOG_OUT} from '../actions/loggedInUser'


export default function loggedInUser (state = null,action){
  switch (action.type) {
    case SET_LOGGEDIN_USER:
      return action.id
    case USER_LOG_OUT:
      return null
    default:
      return state
  }
}
