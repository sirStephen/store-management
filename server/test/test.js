// import chai, { assert, expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

const should = chai.should();

chai.use(chaiHttp);

describe('Products', () => {
  it('it should get ALL PRODUCTS on /api/v1/products GET', (done) => {
    chai.request(app)
      .get('/api/v1/products')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('object');
        done();
      });
  });
  it('It should get a SINGLE PRODUCT on /api/v1/products/:id GET');
  it('It should create a NEW PRODUCT on /api/v1/products POST', (done) => {
    chai.request(app)
      .post('/api/v1/products')
      .send({ productName: 'bread', price: '300' })
      .end((error, response) => {
        response.should.have.status(400);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message');
        // response.body.message.should.be.a('string');
        done();
      });
  });
});

// // TEST FOR PRODUCTS
// describe('Test for all products api', () => {
//   it('Get all products', (done) => { // <= Pass in done callback
//     chai.request(server)
//       .get('/api/v1/products')
//       .end((error, response) => {
//         expect(response).to.have.status(200);
//         done(); // <= Call done to signal callback end
//       });
//   });
// });

// describe('Test for a product api', () => {
//   it('Get A products', (done) => { // <= Pass in done callback
//     chai.request(server)
//       .get('/api/v1/products/:id')
//       .end((error, response) => {
//         expect(response).to.have.status(404);
//         done(); // <= Call done to signal callback end
//       });
//   });
// });

// describe('Test for a product api', () => {
//   it('Get A products', (done) => { // <= Pass in done callback
//     chai.request(server)
//       .get('/api/v1/products/:id')
//       .end((error, response) => {
//         expect(response).to.have.status(404);
//         done(); // <= Call done to signal callback end
//       });
//   });
// });

// describe('Test for a product api', () => {
//   it('POST a product', (done) => { // <= Pass in done callback
//     chai.request(server)
//       .post('/api/v1/products')
//       .end((error, response) => {
//         expect(response).to.have.status(404);
//         done(); // <= Call done to signal callback end
//       });
//   });
// });

// describe('Test for a product api', () => {
//   it('DELETE a product', (done) => { // <= Pass in done callback
//     chai.request(server)
//       .delete('/api/v1/products/:id')
//       .end((error, response) => {
//         expect(response).to.have.status(404);
//         done(); // <= Call done to signal callback end
//       });
//   });
// });

// // TEST FOR SALES
// describe('Test for all sales api', () => {
//   it('Get all sales', (done) => { // <= Pass in done callback
//     chai.request(server)
//       .get('/api/v1/sales')
//       .end((error, response) => {
//         expect(response).to.have.status(200);
//         done(); // <= Call done to signal callback end
//       });
//   });
// });

// describe('Test for all sales api', () => {
//   it('Get a sales', (done) => { // <= Pass in done callback
//     chai.request(server)
//       .get('/api/v1/sales/:id')
//       .end((error, response) => {
//         expect(response).to.have.status(404);
//         done(); // <= Call done to signal callback end
//       });
//   });
// });

// describe('Test for all sales api', () => {
//   it('POST sale', (done) => { // <= Pass in done callback
//     chai.request(server)
//       .post('/api/v1/sales/:id')
//       .end((error, response) => {
//         expect(response).to.have.status(400);
//         done(); // <= Call done to signal callback end
//       });
//   });
// });
