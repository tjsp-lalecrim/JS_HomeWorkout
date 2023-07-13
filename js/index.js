window.onload = function () {
  // Get workouts
  const workoutsList = document.getElementById("workoutsList");

  // Create workout
  function createWorkout(workout) {
    const workoutElement = document.createElement("div");
    workoutElement.id = "workout-" + workout.id;
    workoutElement.classList.add("workout");
    const workoutName = document.createElement("h3");
    workoutName.innerText = workout.name;
    const workoutDescription = document.createElement("p");
    workoutDescription.innerText = workout.description;
    workoutElement.appendChild(workoutName);
    workoutElement.appendChild(workoutDescription);
    workoutElement.addEventListener("click", function () {
      window.location.href = "exercises.html?workoutId=" + workout.id;
    });
    return workoutElement;
  }

  // Add workouts to DOM
  workouts.forEach(function (workout) {
    workoutsList.appendChild(createWorkout(workout));
  });
};
