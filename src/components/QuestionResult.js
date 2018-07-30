import React, { Component } from 'react';
import winner from '../winner.png'
/**
 * QuestionResult
 */
export class QuestionResult extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {question,answer,author} = this.props
    const {optionOne,optionTwo} = question
    const countOne = optionOne.votes.length
    const countTwo = optionTwo.votes.length
    let total = countOne+countTwo
    let ratioOne = countOne/total * 100
    const winOptionOne = answer === 'optionOne' && countOne >= countTwo;
    const winOptionTwo = answer === 'optionTwo' && countOne <= countTwo
    return (
      <div className='queContainer'>
        <div className='topAuthor'>Asked by {author.name} </div>
        <div className='bottomReBox'>
          <div className='leftAvaRe'>
            <img
              src={author.avatarURL}
              className='avatar100re'
              alt={author.name}
            />
          </div>
          <div className='resultContainer'>
            <div className = 'intro3'>Results: </div>
            <div className={winOptionOne? 'option win':'option'}>
            {
              winOptionOne
              ?<img
                src={winner}
                className='winner'
                alt='winner'
              />
              :''
            }
              <div className='optionText'>Would you rather {optionOne.text}</div>
              <div>
                <ProgressBar ratio={ratioOne}/>
              </div>
              <div className='count'>{countOne} out of {total} votes</div>
            </div>
            <div className={winOptionTwo? 'option win':'option'}>
              {
                winOptionTwo
                ?<img
                  src={winner}
                  className='winner'
                  alt='winner'
                />
                :''
              }
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
