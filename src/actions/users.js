import { saveQuestionAnswer } from '../util/api'
import {updateQuestions } from './questions'
import {RECEIVE_USERS, SAVE_USER_ANSWER} from './actionTypes'

export function receiveUsers (users){
  return {
    type:RECEIVE_USERS,
    users
  }
}

export function saveAnswer(users){
  return {
    type: SAVE_USER_ANSWER,
    users
  }
}

export function handleSaveAnswer ({id, answer}){
  return (dispatch, getState) => {
    const {loggedInUser} = getState()
    return saveQuestionAnswer({
      authedUser: loggedInUser,
      qid:id,
      answer
    }).then(({users,questions})=>{
      dispatch(saveAnswer(users))
      dispatch(updateQuestions(questions))
    })
  }
}
