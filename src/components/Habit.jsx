import React from 'react';

const Habit = ({habit, onIncrement, onDecrement, onDelete}) => {
    const handleIncrement = () => {
        onIncrement(habit)
    }
    const handleDecrement = () => {
        onDecrement(habit)
    }
    const handleDelete = () => {
        onDelete(habit)
    }
    return (
        <>
        
            <li key={habit.id}>
                <span className="habit-name">{habit.name}</span>
                <span className="habit-count">{habit.count}</span> 
                <button className="button" onClick={handleIncrement}>plus</button>
                <button className="button" onClick={handleDecrement}>minus</button>
                <button className="button" onClick={handleDelete}>delete</button>
            </li>
        </>
    )
}

export default Habit;