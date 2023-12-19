import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import appRouter from './router/router'
const app = express();

//settings
app.set("port", 4000);

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

appRouter(app);

export default app;