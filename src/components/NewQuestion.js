import React, { Component } from 'react';
import Modal from 'react-modal';
import { handleSaveQuestion } from '../actions/questions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

/**
 * NewQuestion
 */
 Modal.setAppElement('#root')
const defaultState = {
  optionOneText:'',
  optionTwoText:'',
  toHome: false,
  modalIsOpen:false
}
export class NewQuestion extends Component {
  state = defaultState


  openModal = ()=>{
    this.setState({modalIsOpen:true})
  }
  closeModal = () =>{
    this.setState({modalIsOpen:false})
  }
  handleCloseModal = (e) => {
    e.preventDefault()
    this.closeModal()
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
      this.openModal()
      return
    }
    this.setState(()=>({
      ...defaultState,
      toHome: true
    }))
    this.props.saveQuesion({optionOneText,optionTwoText})

  }

  render() {
    const {toHome,optionOneText,optionTwoText} = this.state
    const params = {
      optionOneText,
      optionTwoText,
      handleChangeOne: this.handleChangeOne,
      handleChangeTwo: this.handleChangeTwo,
      handleSubmit: this.handleSubmit
    }
    if(toHome){
      return <Redirect to ='/' />
    }
    return (
      <div>
        <AddQuestionForm params = {params}/>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          className = 'modal'
        >
        <h3>Please input both options!</h3>
        <div>
          <button onClick= {this.handleCloseModal} className='modalBtn'> OK, Got it! </button>
        </div>
      </Modal>
      </div>

    );
  }
}


function AddQuestionForm({params}){
  const {
    optionOneText,
    optionTwoText,
    handleChangeOne,
    handleChangeTwo,
    handleSubmit
  } = params
  return(
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
              onChange = {handleChangeOne}
              value = { optionOneText}
              placeholder = 'Enter Option One Text Here'
              maxLength='36'
            />
            <div className='leftletter'>
              {
                 optionOneText.length > 25
                ? <span >{36- optionOneText.length}</span>
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
              onChange = {handleChangeTwo}
              value = { optionTwoText}
              placeholder = 'Enter Option One Text Here'
              maxLength='36'
            />
            <div className='leftletter'>
              {
                 optionTwoText.length > 25
                ? <span>{36- optionTwoText.length}</span>
                :''
              }
            </div>
          </div>
          <div className='margin10'>
            <button onClick={handleSubmit} className='answerbtn'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    saveQuesion: (question) =>dispatch(handleSaveQuestion(question))
  }
}

export default connect(null,mapDispatchToProps)(NewQuestion);
