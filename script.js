//your JS code here. If required.
// JavaScript code to determine the DOM level of the element with the id 'level'

function findDomLevel() {
    // Get the element with id 'level'
    const element = document.getElementById("level");

    let level = 0;
    let currentElement = element;

    // Traverse up the DOM tree to count levels
    while (currentElement) {
        level++;
        currentElement = currentElement.parentElement;
    }

    // Display the DOM level using alert
    alert(`The level of the element is: ${level}`);
}

// Call the function to display the level
findDomLevel();
