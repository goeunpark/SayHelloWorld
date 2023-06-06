// THREE STEPS TO ATTACH EVENT LISTENERS TO OUR HTML ELEMENTS
// (start from the bottom and move up!)

// (3) Create the function that does <some stuff>
const sayHelloWorld = () => {
    const newHello = document.createElement("span");
    const helloContainer = document.querySelector("#helloContainer");
    newHello.textContent = "Hello World! 🌎";
    helloContainer.appendChild(newHello);
};

// (2) Create a registerEventHandlers function right above step 1
const registerEventHandlers = () => {

    // (2.1) Identify the HTML element(s) that we want to attach an event to
    const helloButton = document.querySelector("#sayHelloButton");

    // (2.2) Attach the event listener that takes two parameters: 
    // the type of event (like 'click' or 'scroll' or 'drag) AND 
    // the function that should be called when the event occurs
    helloButton.addEventListener("click", sayHelloWorld);
};

// (1) At the bottom of JS file, register event handlers to the DOM:
document.addEventListener("DOMContentLoaded", registerEventHandlers);
