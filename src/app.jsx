import './app.css';
import React, {useState} from 'react';
import HabitContainer from './components/HabitContainer';
import Navbar from './components/Navbar';

const App = () => {
  
  const [habits, setHabits] = useState([
    {id : 1, name : "Habit1", count : 0},
    {id : 2, name : "Habit2", count : 0},
    {id : 3, name : "Habit3", count : 0},

  ]);

  const handleIncrement = (habit) => {
    const newHabits = habits.map(item => {
        if(item.id === habit.id){
            return {...habit, count : habit.count + 1};
        }
        return item;
    })
    setHabits(newHabits);
  }
  const handleDecrement = (habit) => {
    const newHabits = habits.map(item => {
        if(item.id === habit.id){
            const count = habit.count - 1;
            return {...habit, count : count < 0 ? 0 : count};
        }
        return item;
    })
    setHabits(newHabits);
  }
  const handleDelete = (habit) => {
    const newHabits = habits.filter(item => item.id !== habit.id);
    setHabits(newHabits);
  }

  const handleReset = () => {
    const newHabits = habits.map(habit => {
      if(habit.count !== 0) {
        return {...habit, count : 0};
      }
      return habit;
    });
    setHabits(newHabits);
  }

  const totalCount = habits.filter(item => item.count > 0).length;
  return (
    <>
      <Navbar totalCount={totalCount}/>
      <HabitContainer 
        habit={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onReset={handleReset}
      />
    </>
  )
}
export default App;
