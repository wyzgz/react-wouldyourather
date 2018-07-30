import React, { Component } from 'react';
import {connect} from 'react-redux'
import champion from '../cham.png'
import second from '../second.png'
import third from '../third.png'

/**
 * LeaderBoard
 */
export class LeaderBoard extends Component {
    render(){
      const {scoreList} = this.props
      return (
        <div className='counts'>
          {scoreList.map((scoreItem,index) => (
            <li key = {index}>
              {
                index === 0 && <img src ={champion} className='award' alt='champion'/>
              }
              {
                index === 1 && <img src ={second} className='award' alt='second'/>
              }
              {
                index === 2 && <img src ={third} className='award' alt='third'/>
              }
              <div className='scoreItem'>
                <div className = 'leftAvaScore'>
                  <img src={scoreItem.avatarURL} className = 'avartar80' alt={scoreItem.name}/>
                </div>
                <div className='middle-score'>
                  <div className='font20 bold'>{scoreItem.name}</div>
                  <div className='scoreDetail topone'>Answered Question: <span className='countr'>{scoreItem.answered}</span></div>
                  <div className='scoreDetail'>Created Question: <span className='countr'>{scoreItem.asked}</span></div>
                </div>
                <div className='right-score'>
                  <div className='score'>
                    <div className='scoretext'>Score</div>
                    <div className='scorenum'>{scoreItem.score}</div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </div>
      )
    }
}

  function mapStateToProps({users}){
    let userList = Object.values(users)
    let scoreList = []
    userList.map(user=>{
      let answers = Object.keys(user.answers)
      let total = user.questions.length + answers.length
      scoreList.push({
        id:user.id,
        name:user.name,
        avatarURL:user.avatarURL,
        score:total,
        answered: answers.length,
        asked: user.questions.length
      })
      return user
    })
    scoreList.sort((a,b)=> b.score-a.score)
    return {
      scoreList
    }
  }

export default connect(mapStateToProps)(LeaderBoard);
