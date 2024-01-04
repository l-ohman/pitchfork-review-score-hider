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
  }
}

function hideScore() {
  scoreElement.textContent = "—";
}

function showScore() {
  scoreElement.textContent = originalScore;
}

function toggleScoreVisibility() {
  debugMessage("Toggling score visibility");
  if (scoreVisible) {
    hideScore();
  } else {
    showScore();
  }
  scoreVisible = !scoreVisible;
}

function main() {
  setReviewScoreElement();
  if (scoreElement) {
    originalScore = scoreElement.textContent;
    reviewScoreContainer.style.cursor = "pointer";
  } else {
    debugMessage("Could not locate score element");
  }
  hideScore();
  document.body.style.display = "block";
  reviewScoreContainer.onclick = toggleScoreVisibility;
}

// Custom logger because Pitchfork's console is cluttered with errors/warnings
function debugMessage(message) {
  console.log(`\n——— Pitchfork Score Hider: ———\n${message}\n`);
}
