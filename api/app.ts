import express from 'express'
import { loadControllers } from 'awilix-express';
import loadContainer from './ioc/container';
// import jwt from 'express-jwt';
// import cors from 'cors';

const PORT: number = Number(process.env.PORT) || 3000;

export const app: express.Application = express();

// JSON Support
app.use(express.json());

// Container
loadContainer(app);

// Controllers
app.use(loadControllers(
    './controllers/**/*.ts',
    { cwd: __dirname }
));

app.get('/', (req, res) => res.send('Hellou capo'))

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT} 🏃`)
})

