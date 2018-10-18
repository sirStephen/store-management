// server.js
import express from 'express';
import dotenv from 'dotenv';

// import { productDB, attendantsDB } from './dummy-data/db';
import ProductController from './controllers/ProductController';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (request, response) => response.status(200).send({
  message: 'Yipeee! It is working',
}));

app.post('/api/v1/products', ProductController.create);
app.get('/api/v1/products', ProductController.getAllProducts);
app.get('/api/v1/products/:productID', ProductController.getOneProduct);
app.put('/api/v1/products/:productID', ProductController.updateProduct);
app.delete('/api/v1/products/:productID', ProductController.delete);

app.listen(process.env.PORT, () => {
  console.log(`app is listening on ${process.env.PORT}!`);
});
