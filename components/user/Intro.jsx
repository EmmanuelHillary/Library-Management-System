import React from 'react'
import { useSelector } from 'react-redux'

const Intro = () => {
    const { user } = useSelector((state) => state.auth);
  return (
    <div className='w-full bg-pink-200 h-[50vh]'>
      <div className="w-[400px]"></div>
      {user}
    </div>
  )
}

export default Intro
