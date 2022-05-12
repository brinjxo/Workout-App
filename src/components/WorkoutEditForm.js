import React, { useState, useEffect } from "react";
import {useParams, useHistory} from 'react-router-dom'

const WorkoutEditForm = ({ onUpdateWorkout }) => {
  const [formState, setFormState] = useState({
    name: "",
    about: "",
    image: "",
  });

  const { name, about, image } = formState;

  const { id } = useParams() // {id: 1}

  const history = useHistory()

  console.log(history)
  useEffect(() => {
    fetch(`http://localhost:4000/workouts/${id}`)
      .then((res) => res.json())
      .then((workout) => setFormState(workout));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formState),
    };

    fetch(`http://localhost:4000/workouts/${id}`, configObj)
      .then((resp) => resp.json())
      .then((updatedWork) => {
        onUpdateWorkout(updatedWork);
        history.push(`/workouts/${id}`)
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form" autoComplete="off">
      <h3>Edit Workout</h3>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
      />

      <label htmlFor="about">About</label>
      <textarea id="about" name="about" value={about} onChange={handleChange} />

      <label htmlFor="image">Screenshot</label>
      <input
        type="text"
        id="image"
        name="image"
        value={image}
        onChange={handleChange}
      />

      <button type="submit">Update Workout</button>
    </form>
  );
};

export default WorkoutEditForm;