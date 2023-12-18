document.addEventListener("DOMContentLoaded", function () {
  initSpeechSynthesis();
});

function initSpeechSynthesis() {
  if (!("speechSynthesis" in window)) return;

  const speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";
  speech.text = "Congratulations! You have completed the workout.";

  speechSynthesis.speak(speech);
}
