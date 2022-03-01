import { WorkoutButton } from "./components/WorkoutButton";
import { WorkoutDisplay } from "./components/WorkoutDisplay";
import { getRandomElementFromWorkout } from "./utils/workoutData";
import { getQuote } from "./utils/quoteLogic";
import { useState } from "react";

function App() {
  const [workoutInfo, setWorkoutInfo] = useState({
    workout5: null,
    workout20: null,
    longWorkout: null,
  });

  const clickWorkoutButton = (id) => {
    let stateObjCopy = { ...workoutInfo };
    stateObjCopy[id] = getRandomElementFromWorkout(id);
    setWorkoutInfo(stateObjCopy);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <h1>Workout Decider</h1>
      <p>{getQuote()}</p>
      <WorkoutButton
        title="5 Minute Workout"
        id="workout5"
        handleClick={clickWorkoutButton}
      />
      <WorkoutDisplay info={workoutInfo.workout5} />
      <WorkoutButton
        title="20 Minute Workout"
        id="workout20"
        handleClick={clickWorkoutButton}
      />
      <WorkoutDisplay info={workoutInfo.workout20} />
      <WorkoutButton
        title="Longer Workout"
        id="longWorkout"
        handleClick={clickWorkoutButton}
      />
      <WorkoutDisplay info={workoutInfo.longWorkout} />
    </div>
  );
}

export default App;
