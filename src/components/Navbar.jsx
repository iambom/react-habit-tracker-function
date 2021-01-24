import React from 'react';

const Navbar = ({totalCount, }) => {
  return (
    <div className="nav">
        <h1>Habit Tracker Function component</h1>
        <span className="habit-count">{totalCount}</span>
    </div>
  )
}
export default Navbar;
