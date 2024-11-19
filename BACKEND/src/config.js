import * as dotenv from 'dotenv';
const __dirname = import.meta.dirname;
dotenv.config({path: `${__dirname}/config.env`});

export const config = {
    db: {
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    },
};