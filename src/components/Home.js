import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionsPanel from './QuestionsPanel'
import {  Route,Redirect } from 'react-router-dom'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import Question from './Question'
import NavBar from './NavBar'

/**
 * Home
 */
export class Home extends Component {

  render() {
    const {isLoggedIn,loading} = this.props

    return(

      <div>
        <NavBar pathname='/'/>
        {
          loading
          ? null
          : (
            <div>
              <Route path='/' exact component = {QuestionsPanel} />
              <Route path = '/new' component = {NewQuestion} />
              <Route path = '/leaderBoard' component = {LeaderBoard} />
              <Route path='/question/:id'  component={Question} />
            </div>
            )
        }
      </div>
    )
  }
}

function mapStateToProps({loggedInUser,users,questions},props){
  console.log(props)
  return {
    isLoggedIn: loggedInUser !== null,
    loading: questions === null || users === null,
  }
}

export default connect(mapStateToProps)(Home);
