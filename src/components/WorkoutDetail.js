import React, { useEffect, useState } from "react";

const WorkoutDetail = () => {
  const [likes, setLikes] = useState(0);
  const [workout, setWorkout] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const id = 1;

  useEffect(() => {
    fetch(`http://localhost:4000/workouts/${id}`)
      .then((r) => r.json())
      .then((workout) => {
        setWorkout(workout);
        setIsLoaded(true);
      });
  }, [id]);

  if (!isLoaded) return <h2>Loading...</h2>;

  const { image, name, about } = workout;

  function handleLikeClick() {
    setLikes((likes) => likes + 1);
  }

  return (
    <section>
      <div className="workout-detail box">
        <div className="workout-image">
          <img src={image} alt={name} />
          <button className="likes" onClick={handleLikeClick}>
            ❤️{likes}
          </button>
        </div>
        <div className="details">
          <h2>{name}</h2>
          <p>{about}</p>
          <div className="extra">
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetail;