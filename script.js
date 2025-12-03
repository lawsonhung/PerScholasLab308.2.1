// Part 1

// The area in which the plants are contained is circular, with a radius of 5 meters.
const radius = 5;
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const PI = 3.1415;
// const area = PI * radius * radius;
const area = PI * radius ** 2;

// Each plant requires a minimum space of 0.8 square meters.
const plantSize = 0.8;
// The area is starting with 20 plants.
let plantCount = 20;
// The plants double in number every week.

let plantSpace = plantCount * plantSize;

// Predict the plant growth after a specific number of weeks.
// Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.

// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.
let weekNum = 10;

let currentCapacity = plantSpace / area * 100;

for (let currentWeekCount = 0; currentWeekCount < weekNum; currentWeekCount++) {
  plantCount *= 2;
  plantSpace = plantCount * plantSize;
  currentCapacity = plantSpace / area * 100;
  console.log(`In week ${currentWeekCount + 1}, there are ${plantCount} plants taking up ${currentCapacity}% of the space`);

  // Part 3

  if (currentCapacity > 100) {
    throw console.error(`\n🛑 There is not enough space in the ${area} size garden to hold the ${plantCount} plants taking up ${plantSpace} space`);
  }
}

// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
if (currentCapacity > .8) {
  console.log('✂️ Prune them!');
} else
  // Monitored, if they are growing at an acceptable rate.
  // This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
  if (currentCapacity > .5) {
    console.log('👀 Monitor them');
  }

  // Planted, if there is room to plant more plants.
  // This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
  else {
    console.log('🌲 Plant more');
  }

// Part 2

//   The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// 20480 Plants after 10 weeks of no pruning
// If the space remained circular, what would be the radius of this expanded garden?
const expandedGardenRadius = Math.sqrt(plantSpace / PI);
console.log(`After ${weekNum} weeks, ${plantCount} plants have grown. The radius needed for the expanded garden is ${expandedGardenRadius}`);