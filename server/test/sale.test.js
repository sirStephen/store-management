import chaiHttp from 'chai-http';
import chai from 'chai';

import app from '../server';

let token;
let userToken;
const should = chai.should();
chai.use(chaiHttp);

describe('Sales', () => {
  
  // before((done)=>{
  //   const user = {
  //     username: 'papi',
  //     password: 'password2'
  //   }
  //   chai.request(app)
  //     .post('/api/v1/users/login')
  //     .send(user)
  //     .end((error, response) => {
  //       response.should.have.status(200);
  //       response.should.be.json;
  //       response.body.should.be.a('object');
  //       response.body.should.have.property('message').eql('you have successfully logged in');
  //       userToken = response.body.userToken;
  //       done();
  //     });
  // });

  // before((done)=>{
  //   const admin = {
  //     username: 'sir.gregg',
  //     password: 'password1'
  //   }
  //   chai.request(app)
  //     .post('/api/v1/users/login')
  //     .send(admin)
  //     .end((error, response) => {
  //       response.should.have.status(200);
  //       response.should.be.json;
  //       response.body.should.be.a('object');
  //       response.body.should.have.property('message').eql('you have successfully logged in');
  //       token = response.body.token;
        
  //       done();
  //     });
  // });

  // it('It should get all sales on /api/v1/sales/:id GET', (done) => {
  //   chai.request(app)
  //     .get('/api/v1/sales')
  //     .set('Authorization', `Bearer ${ userToken }`) 
  //     .end((error, response) => {
  //       console.log(response.body);
  //       response.should.have.status(200);
  //       response.should.be.json;
  //       response.body.should.be.a('object');
  //       response.body.should.have.property('message').eql('List of all sales');
  //       done();
  //     });
  // });

  // it('It should get all sales on /api/v1/sales/:id GET', (done) => {
  //   chai.request(app)
  //     .post('/api/v1/sales')
  //     .set('Authorization', `Bearer ${ userToken }`) 
  //     .send({ productname: 'bread', price: 300, quantity: 3, total: 900, createat: 'NOW()' })
  //     .end((error, response) => {
  //       console.log(response.body);
  //       response.should.have.status(401);
  //       response.should.be.json;
  //       response.body.should.be.a('object');
  //       response.body.should.have.property('message').eql('');
  //       done();
  //     });
  // });
});