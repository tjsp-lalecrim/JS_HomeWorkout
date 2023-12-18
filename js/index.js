document.addEventListener("DOMContentLoaded", function () {
  const workoutsList = document.getElementById("workoutsList");

  function createWorkoutElement(workout) {
    const workoutElement = document.createElement("div");
    workoutElement.id = `workout-${workout.id}`;
    workoutElement.classList.add("workout");

    const workoutName = document.createElement("h3");
    workoutName.innerText = workout.name;

    const workoutDescription = document.createElement("p");
    workoutDescription.innerText = workout.description;

    workoutElement.appendChild(workoutName);
    workoutElement.appendChild(workoutDescription);

    workoutElement.addEventListener("click", function () {
      navigateToExercises(workout.id);
    });

    return workoutElement;
  }

  function navigateToExercises(workoutId) {
    window.location.href = `exercises.html?workoutId=${workoutId}`;
  }

  function renderWorkouts() {
    workouts.forEach(function (workout) {
      workoutsList.appendChild(createWorkoutElement(workout));
    });
  }

  // Call the render function
  renderWorkouts();
});
