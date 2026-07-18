import React, { useEffect, useState } from 'react'
import GoalsCard from './GoalsCard'
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react'
import CreateGoalCard from './CreateGoalCard';

const GoalsList = () => {
    const [showCreationCard, setShowCreationCard] = useState(false);
    const [goals, setGoals] = useState(null);
    useEffect(() => {
        const access = localStorage.getItem("access")
        fetch('http://127.0.0.1:8000/api/main-goals', {
            headers: {
                Authorization: `Bearer ${access}`
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.code === "token_not_valid") {
                return;
            }
            setGoals(data)
        })
    }, [])

    const toggleCard = () => {
        setShowCreationCard(prev => !prev)
    }
  return (
    <div>
        <div className='flex justify-between items-center py-2'>
            <h3 className='text-lg'>
                Your Main Goals
            </h3>
            <Link to="/">
                <Plus size={30} color='#181818' onClick={toggleCard} />
            </Link>
        </div>
        <div className='flex flex-col gap-y-2 mt-2'>
            {
                goals?.map((goal) => (
                    <GoalsCard key={goal.id} goal={goal.goal} />
                ))
            }
        </div>
        {
            showCreationCard && (
                <CreateGoalCard toggleCard={toggleCard} />
            )
        }
    </div>
  )
}

export default GoalsList