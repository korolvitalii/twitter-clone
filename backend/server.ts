import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { UserCtrl } from './controllers/UserController';
import { registerValidation } from './validators/register';
import './core/db';

const app = express();

app.use(express.json());

app.get('/users', UserCtrl.index);
app.post('/users', registerValidation, UserCtrl.create);
app.get('/users/verify', registerValidation, UserCtrl.verify);


app.listen(process.env.PORT, () => {
  console.log('SERVER is RUNNING  ');
});
