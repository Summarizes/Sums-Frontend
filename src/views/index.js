import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Homepage'
import Login from './Login'

const Views = () => {
  return (
    <div className='App'>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default Views