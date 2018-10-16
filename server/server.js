// server.js
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).send({
  message: 'YAY! Congratulations! Your first endpoint is working',
}));

app.get('/api/v1/products', (request, response) => response.status(200).json({
  message: 'fetch all products',
}));

app.get('/api/v1/products/:productid', (request, response) => response.status(200).json({
  message: 'fetch a single product record',
}));

app.get('/api/v1/sales', (request, response) => response.status(200).json({
  message: 'fetch all sales records',
}));

app.get('/api/v1/sales/:saleid', (request, response) => response.status(200).json({
  message: 'fetch a single sale record',
}));

app.post('/api/v1/products', (request, response) => response.status(200).json({
  message: 'create a product',
}));

app.post('/api/v1/sales', (request, response) => response.status(200).json({
  message: 'create a sale order',
}));

app.listen(process.env.PORT, () => {
  console.log(`app is listening on ${process.env.PORT}!`);
});
