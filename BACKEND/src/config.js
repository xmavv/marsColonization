import * as dotenv from 'dotenv';
const __dirname = import.meta.dirname;
dotenv.config({path: `${__dirname}/config.env`});

export const config = {
    db: {
      host: "mars-colonization-mars-colonization.l.aivencloud.com",
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      port: process.env.DBPORT
    },
};

export const MAX_BUILDING_LEVEL = 10;
export const TYPES = ['laboratory', 'farm', 'powerhouse', 'central', 'hydropolis'];
export const RESOURCES  = ["coins", 'water', 'food','energy', 'oxygen','temperature'];
export const WORKERS = ['electricians','biologists','hydrologists','chemists','meteorologists'];

export const updateCosts = {
  buildings: {
    powerhouse: {
      COINS: 100,
      ENERGY: 20,
      FOOD: 30,
      WATER: 25,
      OXYGEN: 10,
      ELECTRICIANS: 3,
      INCREASE_FACTOR: 1.2
    },
    laboratory: {
      COINS: 100,
      ENERGY: 30,
      FOOD: 35,
      WATER: 20,
      OXYGEN: 15,
      CHEMISTS: 3,
      INCREASE_FACTOR: 1.2
    },
    farm: {
      COINS: 70,
      ENERGY:30,
      FOOD: 10,
      WATER: 30,
      OXYGEN: 25,
      BIOLOGISTS: 3,
      INCREASE_FACTOR: 1.1
    },
    central: {
      COINS: 200,
      ENERGY: 30,
      FOOD: 30,
      WATER: 30,
      OXYGEN: 30,
      METEOROLOGISTS: 5,
      INCREASE_FACTOR: 1.5
    },
    hydropolis: {
      COINS: 80,
      ENERGY: 20,
      FOOD: 35,
      WATER: 15,
      OXYGEN: 25,
      HYDROLOGISTS: 3,
      INCREASE_FACTOR: 1.2
    }
  }
}

export const buyCosts = {
  workers: {
    electricians: {
      COINS: 50,
    },
    biologists: {
      COINS: 30,
    },
    hydrologists: {
      COINS: 40,
    },
    chemists: {
      COINS: 50,
    },
    meteorologists: {
      COINS: 70,
    }
  }
}

export const production = {
  buildings: {
    powerhouse: {
      ENERGY: 2,
      TIME: 60000,
      INCREASE_FACTOR: 1.5
    },
    laboratory: {
      OXYGEN: 2,
      TIME: 60000,
      INCREASE_FACTOR: 1.5
    },
    farm: {
      FOOD: 2,
      TIME: 60000,
      INCREASE_FACTOR: 1.5
    },
    hydropolis: {
      WATER: 2,
      TIME: 60000,
      INCREASE_FACTOR: 1.5
    },
    central: {
      TEMPERATURE: 1,
      TIME: 300000,
      INCREASE_FACTOR: 1.1
    }
  }
}