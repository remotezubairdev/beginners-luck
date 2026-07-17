import React from 'react'
import GoalsCard from './GoalsCard'
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react'

const GoalsList = () => {
  return (
    <div>
        <div className='flex justify-between items-center py-2'>
            <h3 className='text-lg'>
                Your Main Goals
            </h3>
            <Link to="/">
                <Plus size={30} color='#181818' />
            </Link>
        </div>
        <div className='flex flex-col gap-y-2 mt-2'>
            <GoalsCard goal={"Get into Harvard"} />
        </div>
    </div>
  )
}

export default GoalsList