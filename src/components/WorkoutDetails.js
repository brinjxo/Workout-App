import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


// useEffect(() => {
//     fetch(`http://localhost:4000/workouts/${id}`)
//       .then((r) => r.json())
//       .then((workout) => {
//         setWorkout(workout);
//         setIsLoaded(true);
//       });
//   }, [id]);

const WorkoutDetails = () => {
  // const [claps, setClaps] = useState(0);
  const [workout, setWorkout] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
      .then((res) => res.json())
      .then((workout) => {
        setWorkout(workout);
        setIsLoaded(true);
      });
  }, [id]);

  if (!isLoaded) return <h2>Loading...</h2>;

  const { image, name, instructions, target} = workout;

  // function handleClapClick() {
    // setClaps((claps) => claps + 1);
  // }

  return (
    <section>
      <div className="project-detail box">
        <div className="project-image">
          <img src={image} alt={name} />
        </div>
        <div className="details">
          <h2>{name}</h2>
          <p>{instructions}</p>
          <p>{target}</p>
          {link ? (
            <p>
              <a target="_blank" rel="noreferrer" >
                Workout Homepage
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetails;