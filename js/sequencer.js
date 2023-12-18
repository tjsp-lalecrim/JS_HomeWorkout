document.addEventListener("DOMContentLoaded", function () {
  // Get workoutId from URL
  const workoutId = new URLSearchParams(window.location.search).get("workoutId");

  // Get elements
  const title = document.getElementById("title");
  const sequencer = document.getElementById("sequencer");
  const stepId = sequencer.querySelector("#stepId");
  const stepImg = sequencer.querySelector("#stepImg");
  const stepDescription = sequencer.querySelector("#stepDescription");
  const stepDuration = sequencer.querySelector("#stepDuration");
  const nextStepButton = sequencer.querySelector("#nextStep");
  const btnBackToWorkouts = document.querySelector("#backToWorkouts");
  const btnPause = sequencer.querySelector("#btnPause");
  const btnPrevious = sequencer.querySelector("#btnPrevious");
  const btnNext = sequencer.querySelector("#btnNext");

  // Sequencer variables
  let currStep = 0;
  let timer = null;
  let paused = false;
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";

  // Get workout and exercises
  const currWorkout = workouts.find(workout => workout.id == workoutId);
  const steps = exercises.filter(exercise => exercise.workoutId == workoutId);

  // Update Header
  title.innerText = currWorkout?.name || "Workout not found";

  // Text to speech
  const readText = text => {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    speech.text = text;
    speechSynthesis.speak(speech);
  };

  // Pause step
  const pauseStep = () => {
    paused = !paused;
    btnPause.innerText = paused ? "Resume" : "Pause";

    const statusText = paused ? "Paused" : "Resumed";
    readText(statusText);
  };

  // Previous step
  const previousStep = () => {
    if (currStep === 0) return initTimer(steps[currStep].duration);

    paused = false;
    currStep--;
    updateCurrStep();
  };

  // Next step
  const nextStep = () => {
    if (currStep === steps.length - 1) return completeWorkout();

    paused = false;
    currStep++;
    updateCurrStep();
  };

  const nextStepManual = () => nextStep();

  // Init timer
  const initTimer = maxTime => {
    clearInterval(timer);

    if (maxTime < 0) return;

    timer = setInterval(() => {
      if (paused) return;

      if (maxTime > 0) {
        // read every 10 seconds
        if (maxTime < steps[currStep].duration && maxTime % 10 === 0) {
          readText(`${maxTime} seconds remaining`);
        }

        // countdown from 5
        if (maxTime < 6) {
          readText(maxTime);
        }

        maxTime--;
        return (stepDuration.innerText = formatSecondsToClock(maxTime));
      }

      clearInterval(timer);
      nextStep();
    }, 1000);
  };

  // Countdown to start step
  const countdownToStart = maxTime => {
    clearInterval(timer);

    const { duration } = steps[currStep];

    timer = setInterval(() => {
      maxTime--;
      if (maxTime < 6 && maxTime > 0) {
        readText(maxTime);
      }

      if (maxTime <= 0) {
        clearInterval(timer);
        readText("Start!");
        if (duration > 0) {
          initTimer(duration);
        }
      }
    }, 1000);
  };

  // Update current step
  const updateCurrStep = () => {
    if (!steps[currStep]) return;

    // destructuring step values
    const { img, name, duration, reps } = steps[currStep];

    // Update step info
    stepId.innerText = currWorkout
      ? `Step ${currStep + 1} of ${steps.length}`
      : "";
    stepImg.src = img;
    stepDescription.innerText = name;
    stepDuration.innerText =
      duration > 0 ? formatSecondsToClock(duration) : `${reps}x`;

    // Update next step
    nextStepButton.innerText =
      currStep === steps.length - 1
        ? "Next: Workout complete"
        : `Next: ${steps[currStep + 1]?.name}`;

    // Read step info
    const text = `Next step: ${name} - ${
      duration > 0 ? `${duration} seconds` : `${reps} reps`
    }`;
    readText(text);

    countdownToStart(steps[currStep].interval);
  };

  // Complete workout
  const completeWorkout = () => {
    window.location.href = "complete.html";
  };

  // Add event listeners
  btnBackToWorkouts.addEventListener("click", backToWorkouts);
  btnPause.addEventListener("click", pauseStep);
  btnPrevious.addEventListener("click", previousStep);
  btnNext.addEventListener("click", nextStepManual);

  // Disable buttons
  btnPause.disabled = !currWorkout;
  btnPrevious.disabled = !currWorkout;
  btnNext.disabled = !currWorkout;

  // Init
  updateCurrStep();
});
