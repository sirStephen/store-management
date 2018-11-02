import chaiHttp from 'chai-http';
import chai from 'chai';

import app from '../server';
import { admin } from './testToken';

const should = chai.should();
chai.use(chaiHttp);

// TEST FOR PRODUCTS
describe('users', () => {
  // it('admin should register on /api/v1/users/signup POST', (done) => {
  //   chai.request(app)
  //     .post('/api/v1/users/signup')
  //     .set('Authorization', admin) 
  //     .end((error, response) => {
  //       console.log(response.body)
  //       response.should.have.status(201);
  //       response.should.be.json;
  //       response.body.should.be.a('object');
  //       response.body.should.have.property('message').eql('your account was created');
  //       done();
  //     });
  // });
});