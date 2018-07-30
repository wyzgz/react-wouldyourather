import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion
}from './_DATA.js'

export function getInitialData(){
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users,questions])=>({
    users,questions
  }))
}

export function getQuestions(){
  return _getQuestions()
}

export function getUsers(){
  return _getUsers()
}
export function saveQuestion(question){
  return _saveQuestion(question)
}

export function saveQuestionAnswer(answer){ //{ authedUser, qid, answer }
  const result = _saveQuestionAnswer(answer)
  return result
}
