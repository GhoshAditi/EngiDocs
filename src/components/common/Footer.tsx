import React from 'react'
import BarPoll from '../home/BarPoll'
import Statistics from '../home/Statistics'

const Footer: React.FC = () => {
  return (
    <footer>
    <div className="p-8 flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <h1 className='text-6xl p-4 font-semibold'>Rate Us</h1>
        <BarPoll />
      </div>
      <div className="flex-1 p-2">
        <h1 className='text-6xl p-4 font-semibold'>Our Statistics</h1>
        <h3 className='text-xl p-6 mb-4'>Our website is a top resource for engineering students, with over 2 active users and a 95% satisfaction rate. Our comprehensive collection of notes, videos, and PYQs spans all engineering streams, and our unique summarizer tool has been used over 7 times. Our video explanations have garnered over 10 views, significantly improving student understanding and exam performance. Join our growing community and excel in your studies!
        </h3>
        <Statistics/>
      </div>
    </div>
    </footer>
  )
}

export default Footer
