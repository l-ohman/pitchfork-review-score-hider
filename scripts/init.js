// Hiding the entire page before HTML is rendered - prevents score from briefly flickering before being hidden
const styleElement = document.createElement("style");
const cssRules = `body { display: none; }`;
styleElement.appendChild(document.createTextNode(cssRules));
document.documentElement.appendChild(styleElement);
