import chaiHttp from 'chai-http';
import chai from 'chai';

import app from '../server';
import { user, admin } from './testToken';

const should = chai.should();
chai.use(chaiHttp);

describe('Sales', () => {
  it('It should get all sales on /api/v1/sales/:id GET', (done) => {
    chai.request(app)
      .get('/api/v1/sales')
      .set('Authorization', admin) 
      .end((error, response) => {
        console.log(response.body);
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('List of all sales');
        done();
      });
  });

  it('It should get all sales on /api/v1/sales/:id POST', (done) => {
    chai.request(app)
      .post('/api/v1/sales')
      .set('Authorization', user) 
      .send({ productname: 'bread', price: 300, quantity: 3, total: 900, createat: 'NOW()' })
      .end((error, response) => {
        console.log(response.body);
        response.should.have.status(201);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('sale was created');
        done();
      });
  });

  it('It should get all sales on /api/v1/sales/:id POST', (done) => {
    chai.request(app)
      .post('/api/v1/sales')
      .set('Authorization', user) 
      .send({ productname: 'devil', price: 300, quantity: 3, total: 900, createat: 'NOW()' })
      .end((error, response) => {
        console.log(response.body);
        response.should.have.status(404);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('product does not exist');
        done();
      });
  });

  it('It should get all sales on /api/v1/sales/:id POST', (done) => {
    chai.request(app)
      .get('/api/v1/sales/100')
      .set('Authorization', user) 
      .end((error, response) => {
        console.log(response.body);
        response.should.have.status(404);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('no sale found');
        done();
      });
  });

  it('It should get all sales on /api/v1/sales/:id POST', (done) => {
    chai.request(app)
      .get('/api/v1/sales/1')
      .set('Authorization', user) 
      .end((error, response) => {
        console.log(response.body);
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('found sale');
        done();
      });
  });

  it('It should get all sales on /api/v1/sales/:id POST', (done) => {
    chai.request(app)
      .get('/api/v1/sales/a')
      .set('Authorization', user) 
      .end((error, response) => {
        console.log(response.body);
        response.should.have.status(406);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('The sale id should be an integer');
        done();
      });
  });
});