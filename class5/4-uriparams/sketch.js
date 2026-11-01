let DEBUG = true; // Modalità debug

function debugLog(...args) {
  if (DEBUG) {
    console.log(...args);
  }
}

function setup() {
  createCanvas(600, 300);

  const params = getURLParams();

  const countryName = decodeURIComponent(params['countryName'] || 'VIETNAM'); // Default to VIETNAM if not present
  debugLog(countryName);

  textSize(32);
  textAlign(CENTER, CENTER);

  text(countryName, width / 2, height / 2);
}