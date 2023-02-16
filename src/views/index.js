import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BundleDetail from './BundleDetail'
import Cart from './Cart'
import HomePage from './Homepage'
import Login from './Login'
import Register from './Register'

const Views = () => {
  return (
    <div className='App'>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/bundles/:bundle_id' element={<BundleDetail/>}/>
        </Routes>
    </div>
  )
}

export default Views