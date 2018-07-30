import {getQuestions, getUsers} from '../util/api'
import {receiveUsers} from '../actions/users'
import {receiveQuestions} from '../actions/questions'
import {setLoggedInUser} from '../actions/loggedInUser'
import { showLoading, hideLoading } from 'react-redux-loading'


export function handleInitialQuestions(){
  return (dispatch) => {
    dispatch(showLoading())
    getQuestions().then((questions)=>{
      dispatch(receiveQuestions(questions))
      dispatch(hideLoading())
    })
  }
}
export function handleInitialUsers(){
  return (dispatch) => {
    dispatch(showLoading())
    getUsers().then((users)=>{
      dispatch(receiveUsers(users))
      dispatch(hideLoading())
    })
  }
}

export function handleLogInUser(id){
  return (dispatch) => {
    dispatch(setLoggedInUser(id))
    getQuestions().then((questions)=>{
      dispatch(receiveQuestions(questions))
    })
  }
}
