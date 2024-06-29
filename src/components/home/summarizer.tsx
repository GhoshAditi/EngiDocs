import React from 'react';

export const Content: React.FC = () => {
  return (
    <div className="card glass w-96 h-auto md:h-96 bg-white shadow-lg rounded-lg overflow-hidden">
      <figure className="h-2/5 bg-gray-200">
        <img
          className="w-full h-full object-cover"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="car!"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-2xl font-bold mb-2">Life hack</h2>
        <p className="mb-4">How to park your car at your garage?</p>
        <div className="card-actions justify-end mt-auto">
          <button className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn now!
          </button>
        </div>
      </div>
    </div>
  );
};