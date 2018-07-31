import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/users'

/**
 * AnswerQuestion
 */
export class AnswerQuestion extends Component {
  state = {
    option: 'A'
  }
  handleChange = (e)=>{
    console.log(e.target.value)
  }
  handleToggle = (e) => {
    const option = e.target.value
    this.setState ({option})
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    const {id} = this.props
    this.props.saveAnswer({
      id,
      answer: this.state.option === 'A'? 'optionOne':'optionTwo'
    })
  }

  render() {
    const {question,author} = this.props
    const {option} = this.state
    const param = {
      question,
      author,
      option,
      handleChange: this.handleChange,
      handleToggle: this.handleToggle,
      handleSubmit: this.handleSubmit
    }
    return (
      <AnswerQuestionForm param={param}/>
    );
  }
}
function AnswerQuestionForm({param}){
  const {
    question,
    author,
    option,
    handleChange,
    handleToggle,
    handleSubmit
  } = param
  const {name,avatarURL} = author
  const {optionOne,optionTwo} = question

  return(
    <div className='queContainer'>
      <div className='topAuthor'>{name} asks: </div>
      <div className='bottomBox'>
        <div className='leftAva'>
          <img
            src={avatarURL}
            className='avatar100'
            alt={name}
          />
        </div>
        <div className='rightAnswer'>
          <div className='intro3'>Would You Rather...</div>
          <div className = 'answerForm'>
            <form>
              <div>
                <input
                  type ='radio'
                   onClick = {handleToggle}
                   checked = {option === 'A'}
                   value = 'A'
                   onChange={handleChange}
                   />
                  <span>{optionOne.text}</span>
              </div>
              <div>
                <input
                  type ='radio'
                  checked = {option === 'B'}
                  value = 'B'
                  onClick = {handleToggle}
                  onChange = {handleChange}
                  />
                  <span>{optionTwo.text}</span>
              </div>
              <div>
                <button
                  onClick = {handleSubmit}
                  className='answerbtn'
                  >Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


function mapStateToProps({questions},{id,author}){
  const question = questions[id]
  return {
    question,
    id,
    author
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveAnswer: answer => dispatch(handleSaveAnswer(answer))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AnswerQuestion);
