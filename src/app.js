import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = parseInt(process.env.PORT, 10) || 5000;

app.get('/', (req, res) => res.send('One of a kind 🤩'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
