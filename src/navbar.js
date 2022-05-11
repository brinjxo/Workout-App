import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <nav>
        <Link to="/" style={{borderBottom: "none"}}>
          <h1 className="branding">
            <span className="logo">{"Workout"}</span>
            Workout app
          </h1>
        </Link>
        <div className="navigation">
          <NavLink className="button" exact to="/workouts">
            All Exercises
          </NavLink>
          <NavLink className="button" exact to="/workouts/new">
            Add Exercises
          </NavLink>
          <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
