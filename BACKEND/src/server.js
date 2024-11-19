import * as dotenv from 'dotenv';
const __dirname = import.meta.dirname;
dotenv.config({path: `${__dirname}/config.env`});

import {default as app} from './app.js';

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`App running on port ${port}...`)
})
