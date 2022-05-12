import { useState } from "react";

const WorkoutForm = ({ onAddWorkout }) => {
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...formData, likes: 0 }),
    };

    fetch("http://localhost:4000/workouts", configObj)
      .then((resp) => resp.json())
      .then((workout) => {
        onAddWorkout(workout);
        setFormData({
          name: "",
          about: "",
          image: "",
        });
      });
  };

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Workout</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />

        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          onChange={handleChange}
          value={formData.about}
        />

        <label htmlFor="image">Screenshot</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={handleChange}
          value={formData.image}
        />

        <button type="submit">Add Workout</button>
      </form>
    </section>
  );
};

export default WorkoutForm;