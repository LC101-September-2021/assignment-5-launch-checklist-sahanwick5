// Write your JavaScript code here!

// const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function() {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const planet = pickPlanet(listedPlanets);
        console.log(planet);
        addDestinationInfo(document,planet.name,planet.diameter,planet.star,planet.distance,planet.moons,planet.image);
    })
   
});