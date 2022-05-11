import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


useEffect(() => {
    fetch(`http://localhost:4000/workouts/${id}`)
      .then((r) => r.json())
      .then((workout) => {
        setWorkout(workout);
        setIsLoaded(true);
      });
  }, [id]);