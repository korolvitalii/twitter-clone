import dotenv from 'dotenv';

import express from 'express';
import { UserCtrl } from './controllers/UserController';
import { registerValidation } from './validators/register';
import './core/db';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/users', UserCtrl.index);
app.post('/users', registerValidation, UserCtrl.create);

app.listen(8888, () => {
  console.log('SERVER is RUNNING  ');
});
