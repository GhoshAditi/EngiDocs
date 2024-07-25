import React from 'react'

const Statistics: React.FC = () => {
  return (
    <div className="stats shadow flex flex-col md:flex-row gap-4">
      <div className="stat flex-1">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Subjects Available</div>
        <div className="stat-value text-primary">25</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat flex-1">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Total Users</div>
        <div className="stat-value text-secondary">2</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat flex-1">
        <div className="stat-figure text-secondary">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src="https://th.bing.com/th/id/OIP._XhGMryRKWY_0DHkNqZFVwHaHa?rs=1&pid=ImgDetMain" />
            </div>
          </div>
        </div>
        <div className="stat-value">86%</div>
        <div className="stat-title">Site done</div>
        <div className="stat-desc text-secondary">3 tasks remaining</div>
      </div>
    </div>
  )
}

export default Statistics
