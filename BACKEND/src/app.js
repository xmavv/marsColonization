import express, { json, urlencoded } from 'express';
import {router as userRouter} from './routes/userRoutes.js'; 
import {router as buildingRouter} from './routes/buildingRoutes.js';
const app = express()

app.use(json())
app.use(
    urlencoded({
      extended: true,
    }));
    
    
app.use('/api/v1/users',userRouter);
app.use('/api/v1/buildings',buildingRouter);
export default app;