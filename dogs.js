//
//    Name: Jacob Schuster 
//    CS 132 Spring 2024
//    Date: June 3, 2024
//    This is my javascript page that adds the breed information to the info section of the HTMLAllCollection.
// 

/**
 * Initializes event listeners for the 3 breed buttons
 * @param None
 * @return none
 */
async function init() {
    const PWDButton = document.getElementById("PWD");
    const DoodleButton = document.getElementById("Doodle");
    const AShepherdButton = document.getElementById("AShepherd");

    PWDButton.addEventListener("click", () => addDogType("PWD"));
    DoodleButton.addEventListener("click", () => addDogType("Doodle"));
    AShepherdButton.addEventListener("click", addDogType2);
}

/**
 * Fetches information about dog breed and calls displayInfo to display it on the page
 * @param dogType breed of dog
 * @return none
 */
async function addDogType(dogType) {
    try {
        let response = await fetch(`/breed/${dogType}`);
        checkStatus(response);
        const dogInfo = await response.json();
        displayInfo(dogInfo.text);
    } catch (error) {
        handleError(error);
    }
}

/**
 * Fetches information about dog breed and calls displayInfo to display it on the page
 * @param none
 * @return none
 */
async function addDogType2() {
    try {
        let response = await fetch("/AShepherd");
        checkStatus(response);
        const dogInfo = await response.text();
        displayInfo(dogInfo);
    } catch (error) {
        handleError(error);
    }
}

/**
 * Displays info about the dog. appends child to the html page
 * @param information the information fetched on the dog
 * @return none
 */
async function displayInfo(information) {
    const dogInfo = document.getElementById('dogInfo');

    const previousInfo = dogInfo.querySelector('p');
    if (previousInfo) {
        dogInfo.removeChild(previousInfo);
    }
    const infoElement = document.createElement('p');
    infoElement.textContent = information;
    dogInfo.appendChild(infoElement);
}

init();