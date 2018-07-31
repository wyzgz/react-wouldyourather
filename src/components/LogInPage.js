import React, { Component } from 'react';
import { connect } from 'react-redux'
import Modal from 'react-modal';
import {handleLogInUser,handleInitialUsers}  from '../actions/shared'
import {Redirect} from 'react-router-dom'
import LoadingBar from 'react-redux-loading'

/**
 * LogInpage

 */
 Modal.setAppElement('#root')
export class LogInpage extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount(){
    this.props.getData()
  }

  state = {
    id:'default',
    toHome: false,
    modalIsOpen:false
  }
  openModal = ()=>{
    this.setState({modalIsOpen:true})
  }
  closeModal = ()=>{
    this.setState({modalIsOpen:false})
  }
  handleCloseModal = (e) =>{
    e.preventDefault()
    this.closeModal()
  }
  handleChange = (e)=> {
    const id = e.target.value
    this.setState({id})
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    const {id} = this.state

    //set the logged in userID in state
    if(id !== null && id.length >0 && id!== 'default'){
      this.props.logIn(id)
      this.setState({
        toHome: true
      })
    }else{
      this.openModal()
      return
    }
  }
  render() {
    const {id,toHome} = this.state
    const {ids,users} = this.props

    if(toHome ){
      return <Redirect to ='/'/>
    }
    return (
      <div>
        <LoadingBar/>
        <div className = 'loginForm'  id='loginContainer'>
          <h3 className = 'center'>Please Log in</h3>
          <div className = 'center'>
            <form onSubmit = {this.handleSubmit}>
              <div>
                <select onChange = {this.handleChange} value = {id} className='login_select'>
                <option value='default'>---------</option>
                {ids.map(uid => (
                  <option value = {uid} key = {uid}>
                      {users[uid].name}
                  </option>
                ))}
                </select>
              </div>
              <div>
                <button type='submit' className = 'btn'>Sign In</button>
              </div>
            </form>
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          className = 'modal'
        >
        <h3>please choose a user to log in.</h3>
        <div>
          <button onClick= {this.handleCloseModal} className='modalBtn'> OK, Got it! </button>
        </div>
      </Modal>
      </div>
    );


  }
}

function mapStateToProps({users}){
  return {
          ids:Object.keys(users),
          users
         }
}
const mapDispatchToProps = dispatch =>{
  return {
    getData: () => dispatch(handleInitialUsers()),
    logIn:  id => dispatch(handleLogInUser(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LogInpage);
