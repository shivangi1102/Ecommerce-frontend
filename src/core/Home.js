import React from 'react'
import "../styles.css"
import {API} from '../backend'
import Base from './Base'

export default function Home() {
 
  return (
    <Base title="HomePage" description="hello">
        <h1 className='text-white'>Hello frontend {API}</h1>
    </Base>
  )
}
