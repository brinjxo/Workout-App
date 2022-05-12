import React, {useState, useEffect} from 'react';
import { Switch, Route } from "react-router-dom";
import WorkoutDetails from './WorkoutDetails'


function WorkoutList() {
    return (
        <div>
            <Switch>
                <Route path="/workout/:id">
                    <WorkoutDetails />
                </Route>
            </Switch>
        </div>
    )
}


export default WorkoutList