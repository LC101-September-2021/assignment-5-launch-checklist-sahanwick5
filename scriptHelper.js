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
    if (testInput === "") { return "Empty"; }
    if (isNaN(testInput)) { return "Not a Number"; }
    else { return "Is a Number"}
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const StatusList = ["pilotStatus", "copilotStatus", "fuelStatus", "cargoStatus"];
    const launchStatus = document.getElementById("launchStatus");

    list.style.visibility = "hidden";
    document.getElementById(StatusList[0]).innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById(StatusList[1]).innerHTML = `Co-pilot ${copilot} is ready for launch`;

    function unReady(element, text) {
        element.innerHTML = text;
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'rgb(199, 37, 78)';
        list.style.visibility = "visible";
    }
    if (fuelLevel < 10000) { unReady(document.getElementById(StatusList[2]),"Fuel level too low for launch"); }
    else if (cargoLevel > 10000) { unReady(document.getElementById(StatusList[3]),"Cargo mass too heavy for launch"); }
    else {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.color = "rgb(65, 159, 106)";
        list.style.visibility = "visible";
    }

    return document;
}

async function myFetch() {

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
