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

  const coins = faker.number.int({ min: 50, max: 1000 });
  const extraMultiplayer = coins / 300;

  const resources = faker.number.int({
    min: Math.ceil(100 * extraMultiplayer),
    max: Math.ceil(200 * extraMultiplayer),
  });
  const workers = faker.number.int({
    min: Math.ceil(3 * extraMultiplayer),
    max: Math.ceil(5 * extraMultiplayer),
  });
  const duration = faker.number.int({
    min: Math.ceil(60 * extraMultiplayer * 2),
    max: Math.ceil(60 * extraMultiplayer * 3),
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
