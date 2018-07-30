export const SET_LOGGEDIN_USER = 'SET_LOGGEDIN_USER'
export const USER_LOG_OUT = 'USER_LOG_OUT'

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
