import React, { Component } from 'react';
import { connect } from 'react-redux'
import {handleLogInUser,handleInitialUsers}  from '../actions/shared'
import {Redirect} from 'react-router-dom'
import LoadingBar from 'react-redux-loading'

/**
 * LogInpage

 */
export class LogInpage extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount(){
    this.props.dispatch(handleInitialUsers())
  }

  state = {
    id:'default',
    toHome: false
  }

  handleChange = (e)=> {
    const id = e.target.value
    this.setState(()=>({id}))
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    const {id} = this.state

    //set the logged in userID in state
    if(id !== null && id.length >0 && id!== 'default'){
      this.props.dispatch(handleLogInUser(id))
      this.setState(()=>({
        toHome: true
      }))
    }else{
      alert('Please select a user')
      return
    }
  }
  render() {
    const {id} = this.state

    if(this.state.toHome === true){
      return <Redirect to ='/'/>
    }else{
      return (
        <div>
          <LoadingBar/>
          <div className = 'loginForm'>
            <h3 className = 'center'>Please Log in</h3>
            <div className = 'center'>
              <form onSubmit = {this.handleSubmit}>
                <div>
                  <select onChange = {this.handleChange} value = {id} className='login_select'>
                  <option value='default'>---------</option>
                  {this.props.ids.map(uid => (
                    <option value = {uid} key = {uid}>
                        {this.props.users[uid].name}
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
        </div>

      );
    }

  }
}

function mapStateToProps({users}){
  return {
          ids:Object.keys(users),
          users
         }
}

export default connect(mapStateToProps)(LogInpage);
