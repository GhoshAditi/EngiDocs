import React from 'react'
import ShuffleCards from './ShuffleCards'
import CardComponent from './summarizer'

const FeatureCard: React.FC = () => {
    return (
      <>
        <div className="text-center">
          <h1 className="text-4xl font-bold">Our Features</h1>
          <div className="mx-auto mt-2 h-1 w-24 bg-orange-500 rounded"></div>
        </div>
        <div className="p-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <CardComponent />
          </div>
          <div className="flex-1 p-2">
          <ShuffleCards/>
          </div>
        </div>
      </>
    )
}

export default FeatureCard