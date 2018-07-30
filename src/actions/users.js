import { saveQuestionAnswer } from '../util/api'
import {updateQuestions } from './questions'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'

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
