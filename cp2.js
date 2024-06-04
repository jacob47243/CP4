/**
 * Author: Jacob Schuster
 * CS 132 Spring 2024
 * Date: May 26, 2024
 * Description: Javascript file to toggle between cat and dog photo and fetch facts from country data
 */

/**
 * Init function to create the buttons and add event listeners
 * @param None
 * @returns None
 */
function init() {
    const startButton = document.getElementById("toggle1");
    const backButton = document.getElementById("toggle2");

    if (startButton && backButton) {
        startButton.addEventListener("click", toggleView);
        backButton.addEventListener("click", toggleView);
    }

    check_box();
    if (document.getElementById("checkAnswerButton")) {
        fetchCountryData();
        const checkAnswerButton = document.getElementById("checkAnswerButton");
        checkAnswerButton.addEventListener("click", checkAnswer);
    }
}

/**
 * Toggles between the cat photo and profile photo
 * @param None
 * @returns None
 */
function toggleView() {
    const menuView = document.getElementById("profile_photo");
    const gameView = document.getElementById("cat_photo");

    if (menuView && gameView) {
        menuView.classList.toggle("hidden");
        gameView.classList.toggle("hidden");
    }
}

/**
 * Implements check box to pop up additional information
 * @param None
 * @returns None
 */
function check_box() {
    let checkbox = document.getElementById('additional-info-checkbox');
    let additionalInfoDiv = document.getElementById('additional-info');

    if (checkbox && additionalInfoDiv) {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                let additionalInfoParagraph = document.createElement('p');
                additionalInfoParagraph.textContent = "If you are familiar with Massachusetts, technically I lived in Chestnut Hill, and I attended BB&N for 7th grade.";
                additionalInfoDiv.appendChild(additionalInfoParagraph);
            } else {
                additionalInfoDiv.innerHTML = "";
            }
        });
    }
}

let currentCountry = null;
let score = 0;

/**
 * Retreives country data and selects a random country
 * @param None
 * @returns None
 */
async function fetchCountryData() {
    const url = "https://restcountries.com/v3.1/all";
    try {
        let response = await fetch(url, {method: "GET"});
        checkStatus(response);
        const countries = await response.json();
        const index = Math.floor(Math.random() * countries.length);
        currentCountry = countries[index];
        displayFacts(currentCountry);
    } catch (error) {
        handleError(error);
    }
}

/**
 * Displays three facts about the countries
 * @param country the country to retrieve facts about
 * @returns None
 */
function displayFacts(country) {
    let factsInfo = `
        <p>Languages: ${Object.values(country.languages)}</p>
        <p>Continent: ${country.continents}</p>
        <p>Capital: ${country.capital}</p>
    `;
    const facts = document.getElementById('facts');
    facts.innerHTML = factsInfo;
}

/**
 * Checks whether the user submitted the correct country
 * @param None
 * @returns None
 */

function checkAnswer() {
    const userInput = document.getElementById('countryInput').value.toLowerCase();
    const countryName = currentCountry.name.common.toLowerCase();

    if (userInput === countryName) {
        score++;
        document.getElementById('score').textContent = score;
        document.getElementById('result').textContent = "Correct!";
        fetchCountryData();
    } else {
        document.getElementById('result').textContent = `Wrong! The correct answer was ${currentCountry.name.common}.`;
        fetchCountryData();
    }

    document.getElementById('countryInput').value = '';
}

init();
