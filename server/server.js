import express from 'express';
import dotenv from 'dotenv';

import ProductController from './controllers/ProductController';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (request, response) => response.status(200).send({
  message: 'Yipeee! It is working',
}));

app.get('/api/v1/products', ProductController.allProducts);
app.get('/api/v1/products/:id', ProductController.getAProduct);
app.post('/api/v1/products', ProductController.createProduct);
app.delete('/api/v1/products/:id', ProductController.deleteAProduct);

app.listen(process.env.PORT, () => {
  console.log(`app is listening on ${process.env.PORT}!`);
});
