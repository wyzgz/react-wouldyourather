import React, { Component } from 'react';
import { connect } from 'react-redux'
import {handleInitialUsers} from '../actions/shared'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import LogInPage from './LogInPage'
import QuestionsPanel from './QuestionsPanel'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import Question from './Question'
import NavBar from './NavBar'
import ErrorPage from './ErrorPage'

/**
 * App
 */
 class App extends Component {

 componentDidMount(){
   this.props.getData()
 }

  render() {
      const {isLoggedIn,loading,users} = this.props
      if(isLoggedIn){
        return(
          <Router>
            <div  className = 'container'>
              <NavBar/>
              <LoadingBar/>
              {
                loading? null: <LoggedIn users = {users} />
              }
            </div>
          </Router>
        )
      }
      return(
          <div className = 'container'>
            <LogInPage />
          </div>
      )


  }
}

const LoggedIn = users => (
    <div>
      <Route path='/' exact component = {QuestionsPanel} />
      <Route path = '/add' component = {NewQuestion} />
      <Route path='/question/:id'  component={Question} />
      <Route path = '/error' component={ErrorPage} />
      <Route path = '/leaderBoard' render={(props)=><LeaderBoard {...props} users = {users}/>} />
    </div>

)

const  mapDispatchToProps = dispatch =>{
  return {
    getData: ()=>dispatch(handleInitialUsers())
  }
}

function mapStateToProps({loggedInUser,users,questions},{match}){
  return {
    users,
    isLoggedIn: loggedInUser !== null,
    loading: questions === null,
    ...match
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
