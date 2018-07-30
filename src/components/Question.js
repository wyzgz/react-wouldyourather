import React, { Component,Fragment } from 'react';
import { connect} from 'react-redux'
import QuestionResult from './QuestionResult'
import AnswerQuestion from './AnswerQuestion'
import {Redirect} from 'react-router-dom'

/**
 * Question
 */
 class Question extends Component {
  render (){
    const {fakeId} = this.props
    if(fakeId === true) {
      return <Redirect to='/error' />
    }
    const { id, author,hasAnswered ,question,answer} = this.props
    return(
      <Fragment>
          {
            hasAnswered
            ? < QuestionResult question={question} answer = {answer} author={author}/>
            : < AnswerQuestion id={id} author = {author}/>
          }
      </Fragment>
    )
  }
}

function mapStateToProps({users,questions,loggedInUser},{match}){
  const {id} = match.params
  const question = questions[id]
  if(question == null) {
    return{
      fakeId:true
    }
  }
  const author = users[question.author]
  const user = users[loggedInUser]
  const hasAnswered = user.answers[id] != null
  return {
    id,
    author,
    hasAnswered,
    question,
    answer:user.answers[id]
  }
}
export default connect(mapStateToProps)(Question);
