import {saveQuestion} from '../util/api'
import { receiveUsers } from './users'
import {RECEIVE_QUESTIONS,UPDATE_QUESTIONS,SAVE_QUESTION} from './actionTypes'

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
            .then(({questions,users}) => {
              dispatch(receiveQuestions(questions))
              dispatch(receiveUsers(users))
            })
  }
}
