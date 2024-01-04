// Hiding the entire page before HTML is rendered to prevent score from flickering on page load
const styleElement = document.createElement("style");
const cssRules = `body { display: none; }`;
styleElement.appendChild(document.createTextNode(cssRules));
document.documentElement.appendChild(styleElement);
