import React from 'react'
import { Container, Input } from 'reactstrap'

const Homepage = () => {
  return (
    <div className='mx-16 mt-16'>
      <div className='text-left'>
        <h3 className='ml-12 search-bundle-title p-3 inline'>Search Bundle</h3>
      </div>
      <div className='overflow-hidden search-body'>
        <div className='w-1/3 mt-6 mx-auto'>
          <Input className='search-bundle-bar'/>
        </div>
      </div>
    </div>
  )
}

export default Homepage