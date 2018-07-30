import {saveQuestion} from '../util/api'
import { receiveUsers } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS'
export function receiveQuestions(questions){
  return{
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function saveNewQuestion(questions){
  return{
    type: SAVE_QUESTION,
    questions
  }
}
export function updateQuestions(questions){
  return{
    type: UPDATE_QUESTIONS,
    questions
  }
}
export function handleSaveQuestion(question){
  return (dispatch,getState)=>{
    const {loggedInUser} = getState()
    question.author = loggedInUser
    return saveQuestion(question)
            .then((questions,users) => {
              dispatch(receiveQuestions(questions))
              dispatch(receiveUsers(users))
            })
  }
}
