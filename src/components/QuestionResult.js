import React from 'react';
import winner from '../winner.png'
/**
 * QuestionResult
 */
const  QuestionResult = (props) => {
    const {question,answer,author} = props
    const {optionOne,optionTwo} = question
    const countOne = optionOne.votes.length
    const countTwo = optionTwo.votes.length
    const total = countOne+countTwo
    const ratioOne = countOne/total * 100
    const winOptionOne = answer === 'optionOne' && countOne >= countTwo;
    const winOptionTwo = answer === 'optionTwo' && countOne <= countTwo
    const {name,avatarURL} = author
    return (
      <div className='queContainer'>
        <div className='topAuthor'>Asked by {name} </div>
        <div className='bottomReBox'>
          <div className='leftAvaRe'>
            <img
              src={avatarURL}
              className='avatar100re'
              alt={name}
            />
          </div>
          <div className='resultContainer'>
            <div className = 'intro3'>Results: </div>
            <div className={winOptionOne? 'option win':'option'}>
            <WinnerImg isWinner = {winOptionOne} imgSource = {winner}/>
              <div className='optionText'>Would you rather {optionOne.text}</div>
              <div>
                <ProgressBar ratio={ratioOne}/>
              </div>
              <div className='count'>{countOne} out of {total} votes</div>
            </div>
            <div className={winOptionTwo? 'option win':'option'}>
              <WinnerImg isWinner = {winOptionTwo} imgSource = {winner}/>
              <div className='optionText'>Would you rather {optionTwo.text}</div>
              <div>
                <ProgressBar ratio={100-ratioOne}/>
              </div>
              <div className='count'>{countTwo} out of {total} votes</div>
            </div>
          </div>
        </div>
      </div>
    );
}

function WinnerImg({isWinner,imgSource}){
  if(isWinner){
    return (
      <img
        src={imgSource}
        className='winner'
        alt='winner'
      />
    )
  }
  return null
}

function ProgressBar(props){
  const width = props.ratio
  const styleText = {'width':`${width}%`}
  return(
    <div id='barContainer' className = 'bar-border'>
      <div style= {styleText} className = 'bar-grey'></div>
    </div>
  )
}


export default QuestionResult;
