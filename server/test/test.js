import chai, { assert, expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

chai.use(chaiHttp);

// TEST FOR PRODUCTS
describe('Test for all products api', () => {
  it('Get all products', (done) => { // <= Pass in done callback
    chai.request(server)
      .get('/api/v1/products')
      .end((error, response) => {
        expect(response).to.have.status(200);
        done(); // <= Call done to signal callback end
      });
  });
});

describe('Test for a product api', () => {
  it('Get A products', (done) => { // <= Pass in done callback
    chai.request(server)
      .get('/api/v1/products/:id')
      .end((error, response) => {
        expect(response).to.have.status(404);
        done(); // <= Call done to signal callback end
      });
  });
});

describe('Test for a product api', () => {
  it('Get A products', (done) => { // <= Pass in done callback
    chai.request(server)
      .get('/api/v1/products/:id')
      .end((error, response) => {
        expect(response).to.have.status(404);
        done(); // <= Call done to signal callback end
      });
  });
});

describe('Test for a product api', () => {
  it('POST a product', (done) => { // <= Pass in done callback
    chai.request(server)
      .post('/api/v1/products')
      .end((error, response) => {
        expect(response).to.have.status(404);
        done(); // <= Call done to signal callback end
      });
  });
});

describe('Test for a product api', () => {
  it('DELETE a product', (done) => { // <= Pass in done callback
    chai.request(server)
      .delete('/api/v1/products/:id')
      .end((error, response) => {
        expect(response).to.have.status(404);
        done(); // <= Call done to signal callback end
      });
  });
});

// TEST FOR SALES
describe('Test for all sales api', () => {
  it('Get all sales', (done) => { // <= Pass in done callback
    chai.request(server)
      .get('/api/v1/sales')
      .end((error, response) => {
        expect(response).to.have.status(200);
        done(); // <= Call done to signal callback end
      });
  });
});

describe('Test for all sales api', () => {
  it('Get a sales', (done) => { // <= Pass in done callback
    chai.request(server)
      .get('/api/v1/sales/:id')
      .end((error, response) => {
        expect(response).to.have.status(404);
        done(); // <= Call done to signal callback end
      });
  });
});

describe('Test for all sales api', () => {
  it('POST sale', (done) => { // <= Pass in done callback
    chai.request(server)
      .post('/api/v1/sales/:id')
      .end((error, response) => {
        expect(response).to.have.status(400);
        done(); // <= Call done to signal callback end
      });
  });
});
