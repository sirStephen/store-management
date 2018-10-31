import express from 'express';
import dotenv from 'dotenv';

import productRoutes from './routes/productRoutes';
import usersRoutes from './routes/usersRoutes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => response.status(200).send({
  message: 'Yipeee! It is working',
}));

app.use('/api/v1', productRoutes);
app.use('/api/v1', usersRoutes);

app.listen(process.env.PORT, () => {
  console.log(`app is listening on ${process.env.PORT}!`);
});

export default app;
