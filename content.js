let originalScore = "?";
let scoreVisible = false;

let scoreElement = null;
let reviewScoreContainer = null;

main();

function setReviewScoreElement() {
  reviewScoreContainer = document.querySelector("[class^='ScoreCircle']");
  if (!reviewScoreContainer) return;

  const scoreParagraph = reviewScoreContainer.querySelector("p:first-child");
  if (scoreParagraph) {
    scoreElement = scoreParagraph;
    debugMessage("Hiding score (display=none)");
    scoreElement.style.display = "none";
  }
}

function hideScore() {
  debugMessage("Hiding score");
  scoreElement.textContent = "—";
}

function showScore() {
  debugMessage("Showing score");
  scoreElement.textContent = originalScore;
}

function toggleScoreVisibility() {
  debugMessage("Toggle score clicked");
  if (scoreVisible) {
    hideScore();
  } else {
    showScore();
  }
  scoreVisible = !scoreVisible;
}

// Custom logger because Pitchfork's console is cluttered with errors/warnings
function debugMessage(message) {
  console.log(`\n——— Pitchfork Score Hider: ———\n${message}\n`);
}

function main() {
  setReviewScoreElement();
  if (scoreElement) {
    originalScore = scoreElement.textContent;
  } else {
    debugMessage("Could not locate score element");
  }
  hideScore();
  scoreElement.style.display = "block";
  reviewScoreContainer.onclick = toggleScoreVisibility;
}
