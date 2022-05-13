import React from "react";
import {Link, NavLink} from 'react-router-dom'

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <nav>
{/* 
      <Link to="/"><span className="logo">{"🏋️"}</span>
          Workout App</Link>
         
         |  <Link to="/workouts">    All Workouts</Link>
        <Link to="/workouts/new">               Add Workout</Link>
        <button onClick={onToggleDarkMode}>{buttonTextContent}</button> */}
      <Link to="/" style={{borderBottom: "none"}}>
        <h1 className="branding">
          <span className="logo">{"🏋️"}</span>
          Workout App
        </h1>
        </Link>
        <div className="navigation">
          <Link className="button" to="/workouts">
            All Workouts
          </Link>
          <Link className="button" to="/workouts/new">
            Add Workout
          </Link>
          <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;