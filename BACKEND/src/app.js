import express, { json, urlencoded } from "express";
import { router as userRouter } from "./routes/userRoutes.js";
import { router as buildingRouter } from "./routes/buildingRoutes.js";
import { router as resourceRouter } from "./routes/resourceRoutes.js";
import { router as workerRouter } from "./routes/workerRoutes.js";
import { router as taskRouter } from "./routes/taskRoutes.js";
import cors from "cors";

const app = express();

// const cors = require('cors');
app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);

app.use("/api/v1/users", userRouter);
app.use("/api/v1/buildings", buildingRouter);
app.use("/api/v1/resources", resourceRouter);
app.use("/api/v1/workers", workerRouter);
app.use("/api/v1/tasks", taskRouter);
export default app;

// Configure CORS middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PATCH','OPTIONS'], // Allowed methods
  credentials: true,                  // Include cookies if needed
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));