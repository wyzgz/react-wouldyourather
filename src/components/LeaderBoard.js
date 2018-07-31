import React from 'react'
import champion from '../cham.png'
import second from '../second.png'
import third from '../third.png'



const LeaderBoard = ({users}) =>(
  <div className='counts'>
    <ul>
    {
      sortUsers(users).map((user,index)=>{
        return itemLi(user,index)
      })
    }
    </ul>
  </div>
)

const itemLi = (user,index)=>{
  const {avatarURL,name,asked,answered,score} = user
  return (
    <li key = {index}>
      {AwardImg(index)}
      <div className='scoreItem'>
        <div className = 'leftAvaScore'>
          <img src={avatarURL} className = 'avartar80' alt={name}/>
        </div>
        <div className='middle-score'>
          <div className='font20 bold'>{name}</div>
          <div className='scoreDetail topone'>Answered Question: <span className='countr'>{answered}</span></div>
          <div className='scoreDetail'>Created Question: <span className='countr'>{asked}</span></div>
        </div>
        <div className='right-score'>
          <div className='score'>
            <div className='scoretext'>Score</div>
            <div className='scorenum'>{score}</div>
          </div>
        </div>
      </div>
    </li>
  )
}
const AwardImg = index => {
  switch (index) {
    case 0:
      return <img src ={champion} className='award' alt='champion'/>
    case 1:
      return <img src ={second} className='award' alt='second'/>
    case 2:
      return <img src ={third} className='award' alt='third'/>
    default:
      return null
  }
}

const sortUsers = ({users}) => {
  Object.keys(users).forEach((id)=>{
    const user = users[id]
    const answers = Object.keys(user.answers)
    const asked = Object.keys(user.questions)
    users[id] = {
      ...user,
      score: answers.length + asked.length,
      answered: answers.length,
      asked: asked.length
    }
  })

  return Object.values(users).sort((a,b)=>b.score - a.score)

}

export default LeaderBoard
