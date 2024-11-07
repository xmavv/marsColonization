import { faker } from "@faker-js/faker";

import { verbs as galacticVerbs } from "./galacticVerbs.js";
import { adjectives as galacticAdjectives } from "./galacticAdjectives.js";
import { nouns as galacticNouns } from "./galacticNouns.js";
import { locations as galacticLocations } from "./galacticLocations.js";
const types = ["energy", "food", "water", "oxygen"];

function generateRandomTask() {
  const verb = faker.helpers.arrayElement(galacticVerbs);
  const adj = faker.helpers.arrayElement(galacticAdjectives);
  const noun = faker.helpers.arrayElement(galacticNouns);
  const loc = faker.helpers.arrayElement(galacticLocations);

  const name = `${adj} ${noun}`;
  const description = `${verb} ${adj} ${noun} ${loc}`;

  const type = faker.helpers.arrayElement(types);

  //these need to be manipulated well,
  //if we get more coins, duration should be equally big,
  //and number of workers too
  //if we get more coins, we should not get lots of resources
  //other way, if we get lots of resources, we get less coins
  const coins = faker.number.int({ min: 10, max: 1000 });
  const resources = faker.number.int({ min: 100, max: 500 });
  const workers = faker.number.int({ min: 1, max: 10 });
  const duration = faker.number.int({ min: 60, max: 60 * 5 }); //1min to 5mins

  const task = {
    name,
    description,
    type,
    coins,
    resources,
    workers,
    duration,
  };

  return task;
}

const task = generateRandomTask();
console.log(task);
