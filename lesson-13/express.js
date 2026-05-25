

import {express} from 'express';

const app = express();

app.put('/chats', (req, res) => {
  res.send('Hello World!');
});

app.patch('/chats', (req, res) => {
  res.send('Hello World!');
});