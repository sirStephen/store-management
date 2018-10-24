import express from '../../../../.cache/typescript/2.9/node_modules/@types/express';
import dotenv from '../../../../.cache/typescript/2.9/node_modules/@types/dotenv';

import ProductController from './controllers/ProductController';
import SalesController from './controllers/SalesController';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (request, response) => response.status(200).send({
  message: 'Yipeee! It is working',
}));

// routes for products
app.get('/api/v1/products', ProductController.allProducts);
app.get('/api/v1/products/:id', ProductController.getAProduct);
app.post('/api/v1/products', ProductController.createProduct);
app.delete('/api/v1/products/:id', ProductController.deleteAProduct);

// routes for sales
app.get('/api/v1/sales', SalesController.allSales);
app.get('/api/v1/sales/:id', SalesController.getASale);
app.post('/api/v1/sales', SalesController.createSale);

const server = app.listen(process.env.PORT, () => {
  console.log(`app is listening on ${process.env.PORT}!`);
});

export default server;
