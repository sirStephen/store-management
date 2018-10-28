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
        response.body.should.have.property('message').eql('List of all products');
        done();
      });
  });

  it('it should get A PRODUCT on /api/v1/products GET', (done) => {
    chai.request(app)
      .get('/api/v1/products/1')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('found product');
        done();
      });
  });

  it('it should fail while trying to get A PRODUCT on /api/v1/products GET', (done) => {
    chai.request(app)
      .get('/api/v1/products/as')
      .end((error, response) => {
        response.should.have.status(404);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('The product id must be an integer');
        done();
      });
  });

  it('it should fail while trying to get A PRODUCT on /api/v1/products GET', (done) => {
    chai.request(app)
      .get('/api/v1/products/8')
      .end((error, response) => {
        response.should.have.status(404);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('no product found');
        done();
      });
  });
});