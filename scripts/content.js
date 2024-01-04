let originalScore = "?";
let scoreVisible = true;
let scoreElement = null;
let reviewScoreContainer = null;

function main() {
  // Find score, cache its value, and replace it
  parseHtmlForScore();
  try {
    originalScore = scoreElement.textContent;
    reviewScoreContainer.style.cursor = "pointer";

    toggleScoreVisibility();
    reviewScoreContainer.onclick = toggleScoreVisibility;
  } catch (error) {
    console.log(
      "\nPitchfork Score Hider Extension Error:\nNo score detected on this page.\n"
    );
    console.error(error);
  }
  // Reshow body regardless of try/catch (init.js hides everything during page load)
  document.body.style.display = "block";
}

function parseHtmlForScore() {
  reviewScoreContainer = document.querySelector("[class^='ScoreCircle']");
  if (!reviewScoreContainer) return;

  const scoreParagraph = reviewScoreContainer.querySelector("p:first-child");
  if (scoreParagraph) {
    scoreElement = scoreParagraph;
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
