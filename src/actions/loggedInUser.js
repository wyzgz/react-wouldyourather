const SET_LOGGEDIN_USER = 'SET_LOGGEDIN_USER'

export function setLoggedInUser(id){
  return {
    type: SET_LOGGEDIN_USER,
    id
  }
}
