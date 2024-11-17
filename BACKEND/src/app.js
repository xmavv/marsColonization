import express, { json, urlencoded } from 'express';
import {router as userRouter} from './routes/userRoutes.js'; 
const app = express()

app.use(json())
app.use(
    urlencoded({
      extended: true,
    }));
    
app.use((req,res,next)=>{
      console.log('Hello from the middleware!');
      next();
    });

    
app.use('/api/v1/users',userRouter);

export default app;