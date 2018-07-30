import React, { Component } from 'react';
import { handleSaveQuestion } from '../actions/questions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

/**
 * NewQuestion
 */
export class NewQuestion extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    optionOneText:'',
    optionTwoText:'',
    toHome: false
  }
  handleChangeOne = (e) => {
    const text = e.target.value
    this.setState(()=>({
      optionOneText: text
    }))
  }

  handleChangeTwo = (e) => {
    const text = e.target.value
    this.setState(()=>({
      optionTwoText: text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {optionOneText, optionTwoText} = this.state
    if(optionOneText === '' || optionTwoText === ''){
      alert('Please input both options!')
      return
    }
    this.setState(()=>({
      optionOneText:'',
      optionTwoText:'',
      toHome: true
    }))
    this.props.dispatch(handleSaveQuestion({optionOneText,optionTwoText}))

  }

  render() {
    const {toHome} = this.state
    if(toHome === true){
      return <Redirect to ='/' />
    }
    return (
      <div className='createBox'>
        <div className='createHeader'>Create new question</div>
        <div className='createText'>
          <div className='intro1'>Complete the question:</div>
          <div className='intro2'>Would you rather...</div>
        </div>
        <div className='createForm'>
          <form>
            <div>
              <input
                onChange = {this.handleChangeOne}
                value = {this.state.optionOneText}
                placeholder = 'Enter Option One Text Here'
                maxLength='36'
              />
              <div className='leftletter'>
                {
                  this.state.optionOneText.length > 25
                  ? <span >{36-this.state.optionOneText.length}</span>
                  :''
                }
              </div>

            </div>
            <div >
            <span className='grayText'>------------------  </span>
            <span className='font12'>OR</span>
            <span className='grayText'>  ------------------</span>
            </div>
            <div>
              <input
                onChange = {this.handleChangeTwo}
                value = {this.state.optionTwoText}
                placeholder = 'Enter Option One Text Here'
                maxLength='36'
              />
              <div className='leftletter'>
                {
                  this.state.optionTwoText.length > 25
                  ? <span>{36-this.state.optionTwoText.length}</span>
                  :''
                }
              </div>
            </div>
            <div className='margin10'>
              <button onClick={this.handleSubmit} className='answerbtn'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(NewQuestion);
