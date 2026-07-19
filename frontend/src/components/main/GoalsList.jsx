import React, { useContext, useEffect, useState } from 'react'
import GoalsCard from './GoalsCard'
import { Link, useNavigate } from 'react-router-dom';
import { LoaderCircle, Plus } from 'lucide-react'
import CreateGoalCard from './CreateGoalCard';
import { fetchData } from '../../utils/fetchData';
import { AuthContext } from '../../context/AuthContext';
import Loading from './../system/Loading';

const GoalsList = () => {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext)
    const [showCreationCard, setShowCreationCard] = useState(false);
    const [goals, setGoals] = useState(null);
    const fetchGoals = async () => {
        try {
            const data = await fetchData('http://127.0.0.1:8000/api/main-goals')
            setGoals(data)
        } catch (error) {
            logout();
        }
    }
    useEffect(() => {
        fetchGoals();
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