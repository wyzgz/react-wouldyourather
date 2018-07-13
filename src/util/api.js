import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _savequestion
}from './_DATA.js'

export function getInitialData(){
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users,questions])=>({
    users,questions
  }))
}

export function saveQuestion(question){
  return saveQuestion(question)
}

export function saveQuestionAnswer(answer){
  return _saveQuestionAnswer(answer)
}
