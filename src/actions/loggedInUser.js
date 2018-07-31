import {SET_LOGGEDIN_USER, USER_LOG_OUT} from './actionTypes'

export function setLoggedInUser(id){
  return {
    type: SET_LOGGEDIN_USER,
    id
  }
}

export function logOut (){
  return {
    type:USER_LOG_OUT
  }
}
