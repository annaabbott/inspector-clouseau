document.querySelector("header >h1").innerText = "Inspector Clouseau";
document.querySelector("header > h2").innerText = "All I require is a telephone, my little bag of tools, and some privacy with which to work. That is all I require.";

function windowProperties() {
    let windowDimensions = document.querySelector("#windowSize");
    let windowDimensionsMessage = `The browser window is ${window.innerWidth} pixels W by ${window.innerHeight} pixels H.`;
    windowDimensions.innerText = windowDimensionsMessage;

    let windowOffset = document.querySelector("#windowOffset");
    let offsetMessage = `The browser offset from the top left corner of the viewport is ${window.screenX} pixels across and ${window.screenY} pixels down.`;
    windowOffset.innerText = offsetMessage;
};

function windowSize() {
    let windowDimensions = document.querySelector("#windowSize");
    let windowDimensionsMessage = `The browser window is ${window.innerWidth} pixels W by ${window.innerHeight} pixels H.`;
    windowDimensions.innerText = windowDimensionsMessage;

    console.log('windowSize');
};

function windowPosition() {
    let windowOffset = document.querySelector("#windowOffset");
    let offsetMessage = `The browser offset from the top left corner of the viewport is ${window.screenX} pixels across and ${window.screenY} pixels down.`;
    windowOffset.innerText = offsetMessage;

    console.log('windowPosition');
};

//windowProperties();
windowSize();
windowPosition();

window.onresize(windowSize);
window.ondrag(windowPosition);