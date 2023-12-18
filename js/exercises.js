document.addEventListener("DOMContentLoaded", function () {
  // Get workoutId from URL
  const workoutId = new URLSearchParams(window.location.search).get("workoutId");

  // Get elements
  const title = document.getElementById("title");
  const exercisesList = document.getElementById("exercisesList");
  const stepsCount = document.getElementById("stepsCount");
  const totalDuration = document.getElementById("totalDuration");
  const startWorkoutButton = document.getElementById("startWorkout");
  const backToWorkoutsButton = document.getElementById("backToWorkouts");

  // Get workout and exercises
  const currWorkout = workouts.find((workout) => workout?.id == workoutId);
  const currExercises = exercises.filter((exercise) => exercise.workoutId == workoutId);

  // Update Header
  title.innerText = currWorkout?.name || "Workout not found";
  stepsCount.innerText = `${currExercises.length} steps`;

  const totalExerciseDuration = currExercises.reduce((total, exercise) => {
    const exerciseTime = exercise.duration > 0 ? exercise.duration : exercise.reps * 5;
    return total + exerciseTime + exercise.interval;
  }, 0);

  totalDuration.innerText = `${totalExerciseDuration} seconds`;

  // Create exercise element
  function createExercise(exercise, index) {
    if (!exercise) return;

    const exerciseElement = document.createElement("div");
    exerciseElement.id = `exercise-${index}`;
    exerciseElement.classList.add("exercise");
    exerciseElement.setAttribute("tabindex", "0");

    const exerciseImg = document.createElement("img");
    exerciseImg.src = exercise.img;
    exerciseImg.alt = exercise.name;

    const exerciseInfo = document.createElement("div");
    exerciseInfo.classList.add("exercise-info");

    const exerciseName = document.createElement("h3");
    exerciseName.innerText = exercise.name;
    exerciseInfo.appendChild(exerciseName);

    // Add duration or reps
    const exerciseDurationOrReps = document.createElement("p");
    exerciseDurationOrReps.innerText = exercise.duration > 0
      ? formatSecondsToClock(exercise.duration)
      : ` x${exercise.reps}`;
    exerciseInfo.appendChild(exerciseDurationOrReps);

    // Add interval if exists
    if (exercise.interval > 0) {
      const exerciseInterval = document.createElement("p");
      exerciseInterval.classList.add("interval");
      exerciseInterval.innerText = ` + ${exercise.interval} seconds (interval)`;
      exerciseInfo.appendChild(exerciseInterval);
    }

    exerciseElement.appendChild(exerciseImg);
    exerciseElement.appendChild(exerciseInfo);

    return exerciseElement;
  }

  // Add exercises to DOM
  currExercises.forEach((exercise, index) => {
    exercisesList.appendChild(createExercise(exercise, index));
  });

  // Start workout
  function startWorkout() {
    if (currWorkout) {
      window.location.href = `sequencer.html?workoutId=${workoutId}`;
    }
  }

  // Add event listeners
  backToWorkoutsButton.addEventListener("click", backToWorkouts);
  startWorkoutButton.addEventListener("click", startWorkout);

  // Disable start workout button if workout is not found
  startWorkoutButton.disabled = !currWorkout;
});
