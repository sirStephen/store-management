import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

const should = chai.should();

chai.use(chaiHttp);

// TEST FOR PRODUCTS
describe('Products', () => {
  it('it should get ALL PRODUCTS on /api/v1/products GET', (done) => {
    chai.request(app)
      .get('/api/v1/products')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('All products');
        response.body.should.have.property('data').should.be.a('object');
        done();
      });
  });

  it('It should get a SINGLE PRODUCT on /api/v1/products/:id GET', (done) => {
    chai.request(app)
      .get('/api/v1/products/1')
      .end((error, response) => {
        console.log(response.body);
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('Found the product');
        response.body.should.have.property('data').should.be.a('object');
        done();
      });
  });

  it('It should fail when trying to get a SINGLE PRODUCT on /api/v1/products/:id GET', (done) => {
    chai.request(app)
      .get('/api/v1/products/ab')
      .end((error, response) => {
        console.log(response.body);
        response.should.have.status(404);
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('The product id must be an integer');
        response.should.have.status(404);
        done();
      });
  });

  it('It should create a NEW PRODUCT on /api/v1/products POST', (done) => {
    chai.request(app)
      .post('/api/v1/products')
      .send({ userId: 1, productName: 'bread', price: '300' })
      .end((error, response) => {
        response.should.have.status(201);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message');
        response.body.message.should.be.a('string');
        response.body.should.have.property('message').eql('New product was created');
        done();
      });
  });

  it('It should fail while trying to create a NEW PRODUCT on /api/v1/products POST', (done) => {
    chai.request(app)
      .post('/api/v1/products')
      .send({ userId: 2, productName: 'bread', price: '300' })
      .end((error, response) => {
        response.should.have.status(401);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message');
        response.body.message.should.be.a('string');
        response.body.should.have.property('message').eql('You are not authorized');
        done();
      });
  });

  it('It must be an integer before it can DELETE PRODUCT on /api/v1/products/id DELETE', (done) => {
    chai.request(app)
      .get('/api/v1/products')
      .end((error, response) => {
        chai.request(app)
          .delete('/api/v1/products/as')
          .end((error, response) => {
            response.should.have.status(404);
            response.body.should.have.property('message');
            response.should.be.json;
            response.body.should.have.property('message').eql('Please make sure it is an integer');
            done();
          });
      });
  });
});
// TEST FOR SALES
describe('Test for all sales api', () => {
  it('it should get ALL SALES on /api/v1/sales GET', (done) => {
    chai.request(app)
      .get('/api/v1/sales')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('All sales');
        response.body.should.have.property('data').should.be.a('object');
        done();
      });
  });

  it('It should get a SINGLE SALE on /api/v1/sales/:id GET', (done) => {
    chai.request(app)
      .get('/api/v1/sales/1')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message');
        done();
      });
  });

  it('It should get a SINGLE SALE on /api/v1/sales/:id GET', (done) => {
    chai.request(app)
      .get('/api/v1/sales/as')
      .end((error, response) => {
        response.should.have.status(404);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message');
        done();
      });
  });

  it('It should create a NEW SALE on /api/v1/sales POST', (done) => {
    chai.request(app)
      .post('/api/v1/sales')
        .send({ userId: 1, productName: 'bread', price: '300' })
        .end((error, response) => {
          response.should.have.status(201);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.should.have.property('message');
          response.body.message.should.be.a('string');
          response.body.should.have.property('message').eql('A sale was made');
        done();
      });
  });

  it('It should not create a NEW SALE on /api/v1/sales POST', (done) => {
    chai.request(app)
      .post('/api/v1/sales')
        .send({ userId: 2, productName: 'bread', price: '300' })
        .end((error, response) => {
          response.should.have.status(401);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.should.have.property('message');
          response.body.message.should.be.a('string');
          response.body.should.have.property('message').eql('You are not authorized');
        done();
      });
  });
});