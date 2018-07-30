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
    this.setState (()=>({option}))
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    const {id} = this.props
    this.props.dispatch(handleSaveAnswer({
      id,
      answer: this.state.option === 'A'? 'optionOne':'optionTwo'
    }))
  }

  render() {
    const {question,author} = this.props
    const {option} = this.state
    return (
      <div className='queContainer'>
        <div className='topAuthor'>{author.name} asks: </div>
        <div className='bottomBox'>
          <div className='leftAva'>
            <img
              src={author.avatarURL}
              className='avatar100'
              alt={author.name}
            />
          </div>
          <div className='rightAnswer'>
            <div className='intro3'>Would You Rather...</div>
            <div className = 'answerForm'>
              <form>
                <div>
                  <input
                    type ='radio'
                     onClick = {this.handleToggle}
                     checked = {option === 'A'}
                     value = 'A'
                     onChange={this.handleChange}
                     />
                    <span>{question.optionOne.text}</span>
                </div>
                <div>
                  <input
                    type ='radio'
                    checked = {option === 'B'}
                    value = 'B'
                    onClick = {this.handleToggle}
                    onChange = {this.handleChange}
                    />
                    <span>{question.optionTwo.text}</span>
                </div>
                <div>
                <button
                  onClick = {this.handleSubmit}
                  className='answerbtn'
                  >Submit</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProps({questions},{id,author}){
  const question = questions[id]
  return {
    question,
    id,
    author
  }
}

export default connect(mapStateToProps)(AnswerQuestion);
