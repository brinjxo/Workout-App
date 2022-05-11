import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [recentWorkouts, setRecentWorkouts] = useState([]);

  useEffect(() => {
    // fetch the 3 most recently added exercises from json-server
    fetch("http://localhost:4000/workouts?_sort=id&_order=desc&_limit=3")
      .then((r) => r.json())
      .then((recentWorkouts) => {
        setRecentWorkouts(recentWorkouts);
      });
  }, []);

  return (
    <section className="box">
      <h2 style={{ fontSize: "3rem" }}>View Exercises.</h2>
      <p>
        Looking for someone to hire? Check out these awesome workoutss from
        Flatiron students.
      </p>
      <h3>Recent Exercises:</h3>
      {recentWorkouts.map((workouts) => (
        <p key={workouts.id}>{workouts.name}</p>
      ))}
      <div style={{ margin: "1rem 0" }}>
        <Link className="button" to="/workouts">
          View All Exercisess
        </Link>
      </div>
    </section>
  );
};

export default Home;
