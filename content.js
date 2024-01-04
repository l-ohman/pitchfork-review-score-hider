const reviewScoreContainer = document.querySelector("[class^='ScoreCircle']");
let scoreParagraph = null;

if (reviewScoreContainer) {
  scoreParagraph = reviewScoreContainer.querySelector("p:first-child");
} else {
  console.log("Unable to find review score container");
}

if (scoreParagraph) {
  console.log(scoreParagraph.textContent);
} else if (reviewScoreContainer) {
  console.log("Unable to find review score")
}
