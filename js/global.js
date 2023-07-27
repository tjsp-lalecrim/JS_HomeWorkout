// Back to workouts
function backToWorkouts() {
  window.location.href = "index.html";
}

// Format seconds to clock format
function formatSecondsToClock(seconds) {
  if (typeof seconds !== "number" || seconds < 0) return seconds;

  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${formattedMinutes}:${formattedSeconds}`;
}
