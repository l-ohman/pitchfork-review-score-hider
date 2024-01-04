let originalScore = "?";
let scoreVisible = true;
let scoreElement, reviewScoreContainer;

function main() {
  // Find score, cache its value, and replace it
  try {
    parseHtmlForScore();
    originalScore = scoreElement.textContent;
    reviewScoreContainer.style.cursor = "pointer";

    toggleScoreVisibility();
    reviewScoreContainer.onclick = toggleScoreVisibility;
  } catch (error) {
    console.log("\nPitchfork Score Extension Error:\nNo score detected.\n");
    console.error(error);
  }
  // Reshow body regardless of try/catch (init.js hides everything during page load)
  document.body.style.display = "block";
}

function parseHtmlForScore() {
  reviewScoreContainer = document.querySelector("[class^='ScoreCircle']");
  if (reviewScoreContainer) {
    scoreElement = reviewScoreContainer.querySelector("p:first-child");
  }
}

function toggleScoreVisibility() {
  if (scoreVisible) {
    scoreElement.textContent = "—";
  } else {
    scoreElement.textContent = originalScore;
  }
  scoreVisible = !scoreVisible;
}

main();
