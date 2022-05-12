import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const WorkoutListItem = ({
  workout,
  onDeleteWorkout,
}) => {
  const { id, image, about, name } = workout;

  const [likeCount, setLikeCount] = useState(0);

  const handleLike = (likeCount) => setLikeCount(likeCount + 1);

  const handleDeleteClick = () => {
    fetch(`http://localhost:4000/workouts/${id}`, {
      method: "DELETE",
    });
    onDeleteWorkout(workout)
      .then((resp) => console.log(resp))
      .then(onDeleteWorkout(workout));
  };

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleLike} className="likes">
          ❤️{likeCount}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
      </section>

      <footer className="extra">
        <div className="manage">
          <Link to={`/workouts/${id}/edit`} className="button">
            <FaPencilAlt />
          </Link>
          <button onClick={handleDeleteClick}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
};

export default WorkoutListItem;