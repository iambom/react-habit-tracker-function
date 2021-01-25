import React, {useState} from 'react';
import Form from './Form';
import Habit from './Habit';

const HabitContainer = ({habit, onIncrement, onDecrement, onDelete, onReset, onAdd}) => {
    return(
        <>
            <Form onAdd={onAdd} />
            <ul>
                {

                    habit.map(item => {
                        return (
                            <Habit 
                                key={item.id}
                                habit={item}
                                onIncrement={onIncrement}
                                onDecrement={onDecrement}
                                onDelete={onDelete}
                            />
                        )
                    })
                }
            </ul>
            <button className="button button-color" onClick={onReset}>Reset All</button>
        </>
    )
}

export default HabitContainer;