// Back to workouts
function backToWorkouts() {
  window.location.href = "index.html";
}

// Format seconds to clock format
function formatSecondsToClock(seconds) {
  if (typeof seconds !== "number" || seconds < 0) {
    // Return a default value or throw an exception
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}
