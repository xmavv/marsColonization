import express, { json, urlencoded } from 'express';
import {router as userRouter} from './routes/userRoutes.js'; 
import {router as buildingRouter} from './routes/buildingRoutes.js';
import {router as resourceRouter} from './routes/resourceRoutes.js';
import {router as workerRouter} from './routes/workerRoutes.js';
const app = express()

app.use(json())
app.use(
    urlencoded({
      extended: true,
    }));
    
    
app.use('/api/v1/users',userRouter);
app.use('/api/v1/buildings',buildingRouter);
app.use('/api/v1/resources',resourceRouter);
app.use('/api/v1/workers',workerRouter);
export default app;