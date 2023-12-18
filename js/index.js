document.addEventListener("DOMContentLoaded", function () {
  const workoutsList = document.getElementById("workoutsList");

  function createWorkoutElement(workout) {
    const workoutElement = document.createElement("div");
    workoutElement.id = `workout-${workout.id}`;
    workoutElement.classList.add("workout");
    workoutElement.setAttribute("tabindex", "0");
    workoutElement.setAttribute("role", "button");
    workoutElement.setAttribute("aria-label", `Click to show the workout exercises: ${workout.name}`);

    const workoutName = document.createElement("h3");
    workoutName.innerText = workout.name;
    workoutName.setAttribute("aria-label", `Nome do exercício: ${workout.name}`);

    const workoutDescription = document.createElement("p");
    workoutDescription.innerText = workout.description;
    workoutDescription.setAttribute("aria-label", `Workout description: ${workout.description}`);

    workoutElement.appendChild(workoutName);
    workoutElement.appendChild(workoutDescription);

    workoutElement.addEventListener("click", function () {
      navigateToExercises(workout.id);
    });

    workoutElement.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        navigateToExercises(workout.id);
      }
    });

    workoutElement.addEventListener("focus", function () {
      workoutElement.classList.add("focused");
    });

    workoutElement.addEventListener("blur", function () {
      workoutElement.classList.remove("focused");
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

  workoutsList.setAttribute("aria-label", "Workout list");

  renderWorkouts();
});
