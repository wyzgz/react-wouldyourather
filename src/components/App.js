import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux'
import {handleInitialUsers} from '../actions/shared'
import { BrowserRouter as Router, Route,Redirect} from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import LogInPage from './LogInPage'
import QuestionsPanel from './QuestionsPanel'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import Question from './Question'
import NavBar from './NavBar'
import ErrorPage from './ErrorPage'

/**
 * ComponentName
 */
 class App extends Component {

 componentDidMount(){
   this.props.dispatch(handleInitialUsers())
 }

  render() {
      const {isLoggedIn,loading} = this.props
      if(isLoggedIn){
        return(
          <Router>
            <div  className = 'container'>
              <NavBar/>
              <LoadingBar/>
              {
                loading
                ? null
                : (
                  <div>
                    <Route path='/' exact component = {QuestionsPanel} />
                    <Route path = '/add' component = {NewQuestion} />
                    <Route path = '/leaderBoard' component = {LeaderBoard} />
                    <Route path='/question/:id'  component={Question} />
                    <Route path = '/error' component={ErrorPage} />
                  </div>
                  )
              }
            </div>
          </Router>
        )
      }else{
        return(
            <div className = 'container'>
              <LogInPage />
            </div>
        )
      }

  }
}


function mapStateToProps({loggedInUser,users,questions},{match}){
  return {
    isLoggedIn: loggedInUser !== null,
    loading: questions === null,
    ...match
  }
}

export default connect(mapStateToProps)(App);
