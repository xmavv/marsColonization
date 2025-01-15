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
export const JOBS = {'laboratory': 'chemists', 'farm': 'biologists', 'powerhouse': 'electricians', 'central': 'meteorologists', 'hydropolis': 'hydrologists'}
export const updateCosts = {
  buildings: {
    powerhouse: {
      COINS: 100,
      ENERGY: 20,
      FOOD: 30,
      WATER: 25,
      OXYGEN: 10,
      WORKERS: 3,
      INCREASE_FACTOR: 1.5
    },
    laboratory: {
      COINS: 100,
      ENERGY: 30,
      FOOD: 35,
      WATER: 20,
      OXYGEN: 15,
      WORKERS: 3,
      INCREASE_FACTOR: 1.5
    },
    farm: {
      COINS: 70,
      ENERGY:30,
      FOOD: 10,
      WATER: 30,
      OXYGEN: 25,
      WORKERS: 3,
      INCREASE_FACTOR: 1.5
    },
    central: {
      COINS: 200,
      ENERGY: 30,
      FOOD: 30,
      WATER: 30,
      OXYGEN: 30,
      WORKERS: 5,
      INCREASE_FACTOR: 2.0
    },
    hydropolis: {
      COINS: 80,
      ENERGY: 20,
      FOOD: 35,
      WATER: 15,
      OXYGEN: 25,
      WORKERS: 3,
      INCREASE_FACTOR: 1.5
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
      RESOURCE: 2,
      TIME: 10,
      INCREASE_FACTOR: 1.5
    },
    laboratory: {
      RESOURCE: 2,
      TIME: 10,
      INCREASE_FACTOR: 1.5
    },
    farm: {
      RESOURCE: 2,
      TIME: 10,
      INCREASE_FACTOR: 1.5
    },
    hydropolis: {
      RESOURCE: 2,
      TIME: 10,
      INCREASE_FACTOR: 1.5
    },
    central: {
      RESOURCE: 1,
      TIME: 600,
      INCREASE_FACTOR: 1.5
    }
  }
}

export const experience = {
  buildings: {
    powerhouse: {
      EXP: 500,
      INCREASE_FACTOR: 1.2
    },
    laboratory: {
      EXP: 500,
      INCREASE_FACTOR: 1.2
    },
    farm: {
      EXP: 400,
      INCREASE_FACTOR: 1.2
    },
    central: {
      EXP: 1000,
      INCREASE_FACTOR: 1.5
    },
    hydropolis: {
      EXP: 400,
      INCREASE_FACTOR: 1.2
    }   
  },
  workers: {
    electricians: {
      EXP: 300,
    },
    biologists: {
      EXP: 200,
    },
    hydrologists: {
      EXP: 200,
    },
    chemists: {
      EXP: 300,
    },
    meteorologists: {
      EXP: 400,
    }   
  },
  tasks: {
    EXP: 700,
  }
}