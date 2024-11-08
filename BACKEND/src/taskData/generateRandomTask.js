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

  const coins = faker.number.int({ min: 10, max: 1000 });
  let extraMultiplayer = 1;

  if (coins < 300) {
    extraMultiplayer = 1;
  } else if (coins < 700) {
    extraMultiplayer = 2;
  } else {
    extraMultiplayer = 3;
  }

  const resources = faker.number.int({
    min: 100 * extraMultiplayer,
    max: 200 * extraMultiplayer,
  });
  const workers = faker.number.int({
    min: 1 * extraMultiplayer * 2,
    max: 3 * extraMultiplayer,
  });
  const duration = faker.number.int({
    min: 60 * extraMultiplayer * 2,
    max: 60 * 3 * extraMultiplayer,
  }); //seconds

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
