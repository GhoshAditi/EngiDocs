import React from 'react'
import BarPoll from '../home/BarPoll'
import Statistics from '../home/Statistics'

const Footer: React.FC = () => {
  return (
    <div className="p-8 flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <h1 className='text-6xl p-4 font-semibold'>Rate Us</h1>
        <BarPoll />
      </div>
      <div className="flex-1 p-2">
        <h1 className='text-6xl p-4 font-semibold'>Our Statistics</h1>
        <h3 className='text-xl p-6 mb-4'>Enter a long ass paragraph here this is purely for decorative purpose because I dont know how to make things look good without using this-Rishi</h3>
        <Statistics/>
      </div>
    </div>
  )
}

export default Footer
