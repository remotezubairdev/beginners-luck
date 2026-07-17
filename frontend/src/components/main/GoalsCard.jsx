import React from 'react'

const GoalsCard = ({ goal }) => {
  return (
    <div className='flex items-center justify-between bg-gray-50 border border-gray-300 px-3 py-1 rounded-xl text-sm'>
        <p>
            {goal}
        </p>
        <button 
        className='bg-white border border-gray-300 p-2 rounded-xl cursor-pointer text-black'
        >
            View Subgoals
        </button>
    </div>
  )
}

export default GoalsCard