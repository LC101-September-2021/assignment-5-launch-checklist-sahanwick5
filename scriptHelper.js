// Write your helper functions here!
require('isomorphic-fetch');



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    //const getElement = document.getElementById
    document.getElementById("missionTarget").innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
    `;
}

function validateInput(testInput) {
    if (testInput == null) { return "Empty"; }
    if (isNaN(testInput)) { return "Not a number"; }
    else { return "Is a number"}
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const getElement = document.getElementById
    const StatusList = ["pilotStatus", "copilotStatus", "fuelStatus", "cargoStatus"];
    const launchStatus = getElement("launchStatus");

    getElement(StatusList[0]).innerHTML = `Pilot ${pilot} is ready for launch`;
    getElement(StatusList[1]).innerHTML = `Co-pilot ${copilot} is ready for launch`;

    function unReady(element, text) {
        element.innerHTML = text;
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.styles.color = "red";
        list.styles.visibility = "visible";
    }
    if (fuelLevel < 10000) { unReady(getElement(StatusList[2]),"Fuel level too low for launch"); }
    if (cargoLevel > 10000) { unReady(getElement(StatusList[3]),"Cargo mass too high for launch"); }
}

async function myFetch() {
    // let planetsReturned;
    // planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
    //     response.json().then(function(json) {
    //         return json;
    //     });
    // });
    //return planetsReturned;

    return fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json().then(function(json) {
            return json;
        });
    });
}

function pickPlanet(planets) {
    const index = Math.round((Math.random() * 100) * ((planets.length-1) / 100))
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
