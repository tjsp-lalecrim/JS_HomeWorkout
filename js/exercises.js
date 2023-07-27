window.onload = function () {
  // Get workoutId from URL
  const workoutId = window.location.search.split("=")[1];

  // Get elements
  const title = document.getElementById("title");
  const exercisesList = document.getElementById("exercisesList");
  const stepsCount = document.getElementById("stepsCount");
  const totalDuration = document.getElementById("totalDuration");
  const startWorkoutButton = document.getElementById("startWorkout");
  const backToWorkoutsButton = document.getElementById("backToWorkouts");

  // Get workout and exercises
  const currWorkout = workouts.find(function (workout) {
    return workout?.id == workoutId;
  });

  const currExercises = exercises.filter(function (exercise) {
    return exercise.workoutId == workoutId;
  });

  // Update Header
  title.innerText = currWorkout?.name ?? "Workout not found";
  stepsCount.innerText = currExercises.length + " steps";
  totalDuration.innerText =
    currExercises.reduce(function (total, exercise) {
      const exerciseTime =
        exercise.duration > 0 ? exercise.duration : exercise.reps * 5;

      return total + exerciseTime + exercise.interval;
    }, 0) + " seconds";

  // Create exercise element
  function createExercise(exercise, index) {
    if (!exercise) return;

    const exerciseElement = document.createElement("div");
    exerciseElement.id = "exercise-" + index;
    exerciseElement.classList.add("exercise");
    const exerciseImg = document.createElement("img");
    exerciseImg.src = exercise.img;
    const exerciseInfo = document.createElement("div");
    exerciseInfo.classList.add("exercise-info");
    const exerciseName = document.createElement("h3");
    exerciseName.innerText = exercise.name;

    exerciseElement.appendChild(exerciseImg);
    exerciseInfo.appendChild(exerciseName);

    // Add duration if exists
    if (exercise?.duration > 0) {
      const exerciseDuration = document.createElement("p");
      exerciseDuration.innerText = formatSecondsToClock(exercise.duration);
      exerciseInfo.appendChild(exerciseDuration);
    } else if (exercise?.reps > 0) {
      const exerciseReps = document.createElement("p");
      exerciseReps.innerText = " x" + exercise.reps;
      exerciseInfo.appendChild(exerciseReps);
    }

    // Add interval if exists
    if (exercise.interval > 0) {
      const exerciseInterval = document.createElement("p");
      exerciseInterval.classList.add("interval");
      exerciseInterval.innerText =
        " + " + exercise.interval + " seconds (interval)";
      exerciseInfo.appendChild(exerciseInterval);
    }

    exerciseElement.appendChild(exerciseInfo);
    return exerciseElement;
  }

  // Add exercises to DOM
  currExercises.forEach(function (exercise, index) {
    exercisesList.appendChild(createExercise(exercise, index));
  });

  // Start workout
  function startWorkout() {
    if (!currWorkout) return;

    window.location.href = "sequencer.html?workoutId=" + workoutId;
  }

  // Add event listeners
  backToWorkoutsButton.addEventListener("click", backToWorkouts);
  startWorkoutButton.addEventListener("click", startWorkout);

  // Disable start workout button if workout is not found
  startWorkoutButton.disabled = !currWorkout;
};
