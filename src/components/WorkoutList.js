import WorkoutListItem from "./WorkoutListItem";
import { useState } from "react";

const WorkoutList = ({
  workouts,
  enterWorkoutEditModeFor,
  onDeleteWorkout,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = workouts.filter((workout) => {
    return workout.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const workoutItems = searchResults.map((workout) => {
    return (
      <WorkoutListItem
        key={workout.id}
        workout={workout}
        enterWorkoutEditModeFor={enterWorkoutEditModeFor}
        onDeleteWorkout={onDeleteWorkout}
      />
    );
  });

  const handleOnChange = (e) => setSearchQuery(e.target.value);

  return (
    <section>
      <h2>Workouts</h2>

      <div className="filter">
        
      </div>
      <input type="text" placeholder="Search..." onChange={handleOnChange} />

      <ul className="cards">{workoutItems}</ul>
    </section>
  );
};

export default WorkoutList;