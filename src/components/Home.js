import { useEffect, useState } from "react";

const Home = () => {
  const [recentWorkouts, setRecentWorkouts] = useState([]);

  useEffect(() => {
    // fetch the 3 most recently added workouts from json-server
    fetch("http://localhost:4000/workouts?_sort=id&_order=desc&_limit=3")
      .then((r) => r.json())
      .then((recentWorkouts) => {
        setRecentWorkouts(recentWorkouts);
      });
  }, []);

  return (
    <section className="box">
      <h2 style={{ fontSize: "3rem" }}>View Awesome Workouts.</h2>
      <h3>Recent Workouts:</h3>
      {recentWorkouts.map((workout) => (
        <p key={workout.id}>{workout.name}</p>
      ))}
      <div style={{ margin: "1rem 0" }}>
        <a className="button" href="/workouts">
          View All Workouts
        </a>
      </div>
    </section>
  );
};

export default Home;