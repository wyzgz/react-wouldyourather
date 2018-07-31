import {RECEIVE_USERS, SAVE_USER_ANSWER} from '../actions/actionTypes'


export default function users(state = {},action){
  switch (action.type) {
    case RECEIVE_USERS:
      return{
        ...state,
        ...action.users
      }
    case SAVE_USER_ANSWER:
      return{
        ...state,
        ...action.users
      }
    default:
      return state
  }
}
