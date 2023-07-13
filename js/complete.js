window.onload = function () {
  if (!("speechSynthesis" in window)) return;
  speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";
  speech.text = "Congratulations! You have completed the workout. Good job!";
  speechSynthesis.speak(speech);
};
