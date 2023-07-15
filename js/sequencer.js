window.onload = function () {
  // Get workoutId from URL
  const workoutId = window.location.search.split("=")[1];

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

  // Get workout and exercises
  const currWorkout = workouts.find(function (workout) {
    return workout.id == workoutId;
  });
  const steps = exercises.filter(function (exercise) {
    return exercise.workoutId == workoutId;
  });

  // Update Header
  title.innerText = currWorkout?.name ?? "Workout not found";

  // Text to speech
  const readText = (text) => {
    if (!("speechSynthesis" in window)) return;
    speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = text;
    speechSynthesis.speak(speech);
  };

  // Back to workouts
  function backToWorkouts() {
    window.location.href = "index.html";
  }

  // Pause step
  const pauseStep = () => {
    paused = !paused;
    btnPause.innerText = paused ? "Resume" : "Pause";

    if (paused) {
      readText("Paused");
    } else {
      readText("Resumed");
    }
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

  const nextStepManual = () => {
    readText("Skipping step");

    nextStep();
  };

  // Init timer
  const initTimer = (maxTime) => {
    clearInterval(timer);

    timer = setInterval(() => {
      if (paused) return;

      if (maxTime > 0) {
        // read every 10 seconds
        if (maxTime < steps[currStep].duration && maxTime % 10 === 0) {
          readText(maxTime + " seconds remaining");
        }

        // countdown from 5
        if (maxTime < 6) {
          readText(maxTime);
        }

        maxTime--;
        return (stepDuration.innerText = maxTime);
      }

      clearInterval(timer);
      nextStep();
    }, 1000);
  };

  // Update current step
  const updateCurrStep = () => {
    if (!steps[currStep]) return;

    // Update step info
    stepId.innerText = currWorkout
      ? `Step ${currStep + 1} of ${steps.length}`
      : "";
    stepImg.src = steps[currStep]?.img;
    stepDescription.innerText = steps[currStep]?.name;
    stepDuration.innerText = steps[currStep]?.duration;
    nextStepButton.innerText =
      currStep === steps.length - 1
        ? "Next: Workout complete"
        : "Next: " + steps[currStep + 1]?.name;

    // Read step info
    const text = `${steps[currStep].name} - ${steps[currStep].duration} seconds`;
    readText(text);

    // Init timer
    initTimer(steps[currStep].duration);
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
};
