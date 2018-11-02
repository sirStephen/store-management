import chaiHttp from 'chai-http';
import chai from 'chai';

import app from '../server';
import { admin } from './testToken';

const should = chai.should();
chai.use(chaiHttp);

// TEST FOR PRODUCTS
describe('users', () => {
  it('admin should register on /api/v1/users/signup POST', (done) => {
    chai.request(app)
      .post('/api/v1/users/signup')
      .set('Authorization', admin) 
      .send({ firstname: 'x', lastname: 'xx', username: 'xxx', password: 'xxxxxxx', role: 'user' })
      .end((error, response) => {
        console.log(response.body)
        response.should.have.status(201);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('your account was created');
        done();
      });
  });

  it('admin should register on /api/v1/users/login POST', (done) => {
    chai.request(app)
      .post('/api/v1/users/login')
      .send({ username: 'xxx', password: '' })
      .end((error, response) => {
        response.should.have.status(400);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('ensure all fields are completely filled');
        done();
      });
  });

  it('admin should register on /api/v1/users/login POST', (done) => {
    chai.request(app)
      .post('/api/v1/users/login')
      .send({ username: 'sir.gregg', password: 'password1' })
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('you have successfully logged in');
        done();
      });
  });

  it('admin should register on /api/v1/users/login POST', (done) => {
    chai.request(app)
      .post('/api/v1/users/login')
      .send({ username: 'sir.gregg', password: 'pass' })
      .end((error, response) => {
        response.should.have.status(400);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('your password should be more than 6 characters');
        done();
      });
  });

  it('admin should register on /api/v1/users/login POST', (done) => {
    chai.request(app)
      .post('/api/v1/users/login')
      .send({ username: '', password: 'pass' })
      .end((error, response) => {
        response.should.have.status(400);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('ensure all fields are completely filled');
        done();
      });
  });
});