// ALAB CONTROL FLOW

const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;

const minSpacePerPlant = 0.8
const startingPlants = 20;
let week = 1;

let plantCount = startingPlants * (2 ** week)

let maxCapacity = area / minSpacePerPlant;

// plant growth for each week
let week = 1;
let plantCount = startingPlants * (2 ** week)
console.log(`During ${week} there were ${plantCount}`);

let week = 2; let plantCount = startingPlants * (2 ** week) 
console.log(`During ${week} there were ${plantCount}`); 

let week = 3; let plantCount = startingPlants * (2 ** week) 
console.log(`During ${week} there were ${plantCount}`);

// Pruned section

const maxCapacity = area / minSpacePerPlant;

const pruneLimit = maxCapacity * 0.8;

if(plantCount > pruneLimit) {
    console.log("Prune the plants");
}

// monitored section 50% - 80%

const pruneLimit = maxCapacity * 0.8;
const monitorLimit = maxCapacity * 0.5

if(plantCount > pruneLimit) {
    console.log("Prune the plants")
} else if (plantCount >= monitorLimit && plantCount <= pruneLimit){
    console.log("Monitor the plants");
}

// Planted section less than 50%

if(plantCount > pruneLimit) {
    console.log("Prune the plants")
} else if (plantCount >= monitorLimit && plantCount <= pruneLimit){
    console.log("Monitor the plants");
} else {
    console.log("Plant more plants");
}