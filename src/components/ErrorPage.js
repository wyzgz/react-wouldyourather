import React from 'react'
import { Link} from 'react-router-dom'
import errorImg from '../errorImg.png'

export default function ErrorPage(){
  return (
    <div className='errorImg'>
      <img src={errorImg}
      alt='error'/>
      <div>
        <h3>
        <Link to = '/'>This page is not found, please check our Home Page!</Link>
        </h3>
      </div>
    </div>
  )
}
