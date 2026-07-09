// ALAB CONTROL FLOW

// part 1

const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;

const minSpacePerPlant = 0.8
const startingPlants = 20;
{

// plant growth for each week

const maxSpace = area / minSpacePerPlant;
const pruneLimit = maxSpace * 0.8;
const monitorLimit = maxSpace * 0.5;

// week 1 
let week = 1;
let plantCount = startingPlants * (2 ** week);
console.log(`During ${week} there were ${plantCount}`);

// pruned / monitored (50-80) or planted

if(plantCount > pruneLimit) {
    console.log("Prune the plants");
} else if (plantCount >= monitorLimit && plantCount <= pruneLimit){
    console.log("Monitor the plants");
} else {
    console.log("Plant more plants");
}

// week 2

week = 2; plantCount = startingPlants * (2 ** week);
console.log(`During ${week} there were ${plantCount}`); 

// pruned - monitored (50-80) or planted 

if(plantCount > pruneLimit) {
    console.log("Prune the plants");
} else if (plantCount >= monitorLimit && plantCount <= pruneLimit){
    console.log("Monitor the plants");
} else {
    console.log("Plant more plants");
}

// week 3 

week = 3; plantCount = startingPlants * (2 ** week);
console.log(`During ${week} there were ${plantCount}`);

// pruned / monitored (50-80) or planted

if(plantCount > pruneLimit) {
    console.log("Prune the plants");
} else if (plantCount >= monitorLimit && plantCount <= pruneLimit){
    console.log("Monitor the plants");
} else {
    console.log("Plant more plants");
}

}


// part 2 
{
const startingPlants = 100;
let week = 10;

// // plants after 10 week ^^^
const plantCount = startingPlants * (2 ** week);
console.log(plantCount);

// space needed if scientist were to start with 100 plants?

const spaceNeeded = plantCount * minSpacePerPlant;
console.log(spaceNeeded);

// additional space needed? 

const newSpace = spaceNeeded - PI * radius * radius;
console.log(newSpace);

// // circular space?

const newRadius = Math.sqrt(spaceNeeded / PI);
console.log(newRadius);
}


// // part 3

{
try {
    const plantCount = 100;
    const spaceNeeded = plantCount * minSpacePerPlant;
    
    if (spaceNeeded > area) {
        throw new Error("plants need more space than what the garden provides");
    }
} catch (error) {
    console.log(error.message);    
}

}