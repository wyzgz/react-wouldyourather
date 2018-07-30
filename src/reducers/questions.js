import {RECEIVE_QUESTIONS, SAVE_QUESTION,UPDATE_QUESTIONS} from '../actions/questions'

export default function questions(state = null, action){
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return{
        ...state,
        ...action.questions
      }
    case SAVE_QUESTION:
      return{
        ...state,
        ...action.questions
      }
    case UPDATE_QUESTIONS:
      return{
        ...state,
        ...action.questions
      }
    default:
      return state
  }
}
