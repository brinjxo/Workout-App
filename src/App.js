import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import Header from "./components/Header";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";
import WorkoutEditForm from "./components/WorkoutEditForm";
import WorkoutDetail from "./components/WorkoutDetail";
import Home from "./components/Home";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/workouts")
      .then((resp) => resp.json())
      .then((workouts) => setWorkouts(workouts));
  }, []);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const onAddWorkouts = (newWork) => {
    setWorkouts((workouts) => [...workouts, newWork]);
  };


  const onUpdateWorkout = (updatedWork) => {
    const updatedWorkouts = workouts.map((ogWorkout) => {
      if (ogWorkout.id === updatedWork.id) {
        return updatedWork;
      } else {
        return ogWorkout;
      }
    });
    setWorkouts(updatedWorkouts);

  };

  const onDeleteWorkout = (deletedWork) => {
    const updatedWorkouts = workouts.filter(
      (workout) => workout.id !== deletedWork.id
    );
    setWorkouts(updatedWorkouts);
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      {/* <Router> */}
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/workouts">
            {/* <h2>workoutlist</h2> */}
          <WorkoutList
            workouts={workouts}
            onDeleteWorkout={onDeleteWorkout}/>
          </Route>
          <Route exact path="/workouts/new">
          <WorkoutForm onAddWorkouts={onAddWorkouts} />
          </Route>
        </Switch>
        {/* </Router> */}
      {/* <Switch>
        <Route exact path="/" element={<Home />}/>
          <h2>Home</h2>
        </Route>
        <Route exact path="/workouts/new">
          <WorkoutForm onAddWorkouts={onAddWorkouts} />
        </Route>
        <Route path="/workouts/:id/edit">
          <WorkoutEditForm

            onUpdateWorkout={onUpdateWorkout}
          />
        </Route>
        <Route path="/workouts/:id">
          <WorkoutDetail /> 
        </Route>
        <Route exact path="/workouts" element={<h2>WorkoutList</h2>}/>
          <h2>WorkoutList</h2>
          <WorkoutList
            workouts={workouts}
            onDeleteWorkout={onDeleteWorkout}
          />
        </Route> 
      </Switch> */}
    </div>
  );
};

export default App;