import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'


/**
 * QuestionsPanel
 */
 class QuestionsPanel extends Component {
   state = {
     showDefault : true,
   }
   handleClick = (e) =>{
     e.preventDefault()
     this.setState(prevState => ({
       showDefault:!prevState.showDefault,
     }))
   }

   render (){
     const {showDefault} = this.state
     const {uList, aList} = this.props
     return (
       <div>
        <div className = 'panel'>
          <button
            value = 'u'
            onClick = {this.handleClick}
            className = {showDefault? 'activebtn':null}
          >Unanswered</button>
          <button
              value = 'a'
              onClick = {this.handleClick}
              className = {showDefault ? null :'activebtn'}
            >Answered</button>
         </div>
         <div>
            {
              this.state.showDefault === true
              ? <QuestionList list = {uList} />
              : <QuestionList list = {aList} />
            }
         </div>
       </div>
     )
   }
}

function QuestionList({list}){
  return (
    <ul>
    {list.map((question)=>(
      <li key = {question.id}>
        <Summary question = {question}/>
      </li>
    ))}
    </ul>
  )
}


function Summary({question}){
  const {id,author,optionOne} = question
  return(
    <Link to ={`/question/${id}`} className='question'>
      <div className = 'left'>
        <img
        src={author.avatarURL}
        className='avatar'
        alt={author.name}
        />
      </div>
      <div className='right'>
        <div className='paddingrigh4 borderbottom'>
          <div className='padding5 center name'>{author.name}</div>
        </div>
        <div className='padding5'>
          <span className = 'would'>Would you rather</span>
          <div className='fontitalic'>
             {optionOne.text}.....
          </div>
          <div className='showdetail'> Show Detail</div>
        </div>
      </div>

    </Link>
  )
}


function mapStateToProps({users,questions,loggedInUser}){
  const user = users[loggedInUser]
  const qList = Object.values(questions)
  const answeredList = Object.keys(user.answers)
  let aList=[],uList = []
  qList.map((question)=>{
    let {name,avatarURL} = users[question.author]
    if(answeredList.includes(question.id)){
      aList.push({
        ...question,
        author:{
          name,
          avatarURL
        }
      })
    }else{
      uList.push({
        ...question,
        author:{
          name,
          avatarURL
        }
      })
    }
    return question
  })
  return {
    aList: aList.sort((a,b)=>b.timestamp - a.timestamp),
    uList: uList.sort((a,b)=>b.timestamp - a.timestamp)
  }
}

export default connect(mapStateToProps)(QuestionsPanel);
