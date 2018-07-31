import React, { Component } from 'react';
import { NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logOut} from '../actions/loggedInUser'
import { withRouter } from 'react-router';
/**
 * NavBar
 */
export class NavBar extends Component {

  handleLogOut = (e) => {
    this.props.dispatch(logOut())
    this.props.history.push('/')
  }

  render() {
    const {user} = this.props
    return (
      <div className = 'navbar'>
        <div className = 'box1'>
          <NavLink
            to ='/'
            exact
            activeClassName='active'
          >Home</NavLink>
          <NavLink
            to = '/add'
            activeClassName='active'
           > New Question</NavLink>
          <NavLink
            to = '/leaderBoard'
            activeClassName='active'
          >Leader Board</NavLink>
        </div>
        <div className = 'box2'>
        <img
          src = {user.avatarURL}
          className = 'avatar30'
          alt={user.name}
        />
          <div className='navname'>
            <div>Welcome</div>
            <div>{user.name}</div>
          </div>
        </div>
        <div className='box3'>
          <button onClick = {this.handleLogOut}>Log Out</button>
        </div>
      </div>
    );
  }
}
function mapStateToProps({users,loggedInUser},ownProps){
  const user = users[loggedInUser]
  return {
    user
  }
}

export default withRouter(connect(mapStateToProps)(NavBar));
