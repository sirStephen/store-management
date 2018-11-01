// // import chai from 'chai';
// import chaiHttp from 'chai-http';
// import chai, { assert, expect } from 'chai';
// import app from '../server';
// let token;
// let userToken;
// const should = chai.should();
// chai.use(chaiHttp);

// // TEST FOR PRODUCTS
// describe('Products', () => {
  

//   it('It should get all sales on /api/v1/sales/:id GET', (done) => {
//     chai.request(app)
//       .get('/api/v1/sales')
//       .set('Authorization', `Bearer ${ token }`) 
//       .end((error, response) => {
//         console.log(response.body);
//         response.should.have.status(200);
//         response.should.be.json;
//         response.body.should.be.a('object');
//         response.body.should.have.property('message').eql('List of all sales');
//         done();
//       });
//   });

//   it('It should get all sales on /api/v1/sales/:id GET', (done) => {
//     chai.request(app)
//       .post('/api/v1/sales')
//       .set('Authorization', `Bearer ${ token }`) 
//       .send({ productname: 'bread', price: 300, quantity: 3, total: 900, createat: 'NOW()' })
//       .end((error, response) => {
//         console.log(response.body);
//         response.should.have.status(200);
//         response.should.be.json;
//         response.body.should.be.a('object');
//         response.body.should.have.property('message').eql('sale was created');
//         done();
//       });
//   });

//   // it('It should get all sales on /api/v1/sales/:id GET', (done) => {
//   //   chai.request(app)
//   //     .get('/api/v1/sale')
//   //     .set('Authorization', `Bearer ${ token }`) 
//   //     // .send({ productname: 'bread', price: 300, quantity: 3, createat: 'NOW()' })
//   //     .end((error, response) => {
//   //       console.log(response.body);
//   //       response.should.have.status(404);
//   //       response.body.should.be.a('object');
//   //       done();
//   //     });
//   // });

  

  

  

//   //     .get('/api/v1/products/1')
//   //     .end((error, response) => {
//   //       console.log(response.body);
//   //       response.should.have.status(404);
//   //       response.should.be.json;
//   //       response.body.should.be.a('object');
//   //       response.body.should.have.property('message').eql('found product');
//   //       response.body.should.have.property('data').should.be.a('object');
//   //       done();
//   //     });
//   // });

//   // it('It should get a SINGLE PRODUCT on /api/v1/products/:id GET', (done) => {
//   //   chai.request(app)
//   //     .get('/api/v1/products/1')
//   //     // .set('Authorization', user1)
//   //     .end((error, res) => {
//   //       expect(res).to.have.status(200);
//   //       assert.isObject(res.body, 'found product');
//   //       done();
//   //     });
//   // });
  
// //   it('It should fail when trying to get a SINGLE PRODUCT on /api/v1/products/:id GET', (done) => {
// //     chai.request(app)
// //       .get('/api/v1/products/ab')
// //       .end((error, response) => {
// //         console.log(response.body);
// //         response.should.have.status(404);
// //         response.body.should.be.a('object');
// //         response.body.should.have.property('message').eql('The product id must be an integer');
// //         response.should.have.status(404);
// //         done();
// //       });
// //   });

// //   it('It should create a NEW PRODUCT on /api/v1/products POST', (done) => {
// //     chai.request(app)
// //       .post('/api/v1/products')
// //       .send({ userId: 1, productName: 'bread', price: '300' })
// //       .end((error, response) => {
// //         response.should.have.status(201);
// //         response.should.be.json;
// //         response.body.should.be.a('object');
// //         response.body.should.have.property('message');
// //         response.body.message.should.be.a('string');
// //         response.body.should.have.property('message').eql('New product was created');
// //         done();
// //       });
// //   });

// //   it('It should fail while trying to create a NEW PRODUCT on /api/v1/products POST', (done) => {
// //     chai.request(app)
// //       .post('/api/v1/products')
// //       .send({ userId: 2, productName: 'bread', price: '300' })
// //       .end((error, response) => {
// //         response.should.have.status(401);
// //         response.should.be.json;
// //         response.body.should.be.a('object');
// //         response.body.should.have.property('message');
// //         response.body.message.should.be.a('string');
// //         response.body.should.have.property('message').eql('You are not authorized');
// //         done();
// //       });
// //   });

// //   it('It must be an integer before it can DELETE PRODUCT on /api/v1/products/id DELETE', (done) => {
// //     chai.request(app)
// //       .get('/api/v1/products')
// //       .end((error, response) => {
// //         chai.request(app)
// //           .delete('/api/v1/products/as')
// //           .end((error, response) => {
// //             response.should.have.status(404);
// //             response.body.should.have.property('message');
// //             response.should.be.json;
// //             response.body.should.have.property('message').eql('Please make sure it is an integer');
// //             done();
// //           });
// //       });
// //   });
// // });
// // // TEST FOR SALES
// // describe('Test for all sales api', () => {
// //   it('it should get ALL SALES on /api/v1/sales GET', (done) => {
// //     chai.request(app)
// //       .get('/api/v1/sales')
// //       .end((error, response) => {
// //         response.should.have.status(200);
// //         response.should.be.json;
// //         response.body.should.be.a('object');
// //         response.body.should.have.property('message').eql('All sales');
// //         response.body.should.have.property('data').should.be.a('object');
// //         done();
// //       });
// //   });

// //   it('It should get a SINGLE SALE on /api/v1/sales/:id GET', (done) => {
// //     chai.request(app)
// //       .get('/api/v1/sales/1')
// //       .end((error, response) => {
// //         response.should.have.status(200);
// //         response.should.be.json;
// //         response.body.should.be.a('object');
// //         response.body.should.have.property('message');
// //         done();
// //       });
// //   });

// //   it('It should get a SINGLE SALE on /api/v1/sales/:id GET', (done) => {
// //     chai.request(app)
// //       .get('/api/v1/sales/as')
// //       .end((error, response) => {
// //         response.should.have.status(404);
// //         response.should.be.json;
// //         response.body.should.be.a('object');
// //         response.body.should.have.property('message');
// //         done();
// //       });
// //   });

// //   it('It should create a NEW SALE on /api/v1/sales POST', (done) => {
// //     chai.request(app)
// //       .post('/api/v1/sales')
// //         .send({ userId: 1, productName: 'bread', price: '300' })
// //         .end((error, response) => {
// //           response.should.have.status(201);
// //           response.should.be.json;
// //           response.body.should.be.a('object');
// //           response.body.should.have.property('message');
// //           response.body.message.should.be.a('string');
// //           response.body.should.have.property('message').eql('A sale was made');
// //         done();
// //       });
// //   });

// //   it('It should not create a NEW SALE on /api/v1/sales POST', (done) => {
// //     chai.request(app)
// //       .post('/api/v1/sales')
// //         .send({ userId: 2, productName: 'bread', price: '300' })
// //         .end((error, response) => {
// //           response.should.have.status(401);
// //           response.should.be.json;
// //           response.body.should.be.a('object');
// //           response.body.should.have.property('message');
// //           response.body.message.should.be.a('string');
// //           response.body.should.have.property('message').eql('You are not authorized');
// //         done();
// //       });
// //   });
// });

// // describe('get a sale by user', () => {
// //   before((done)=>{
// //     const user = {
// //       username: 'papi',
// //       password: 'password2'
// //     }
// //     chai.request(app)
// //       .post('/api/v1/users/login')
// //       .send(user)
// //       .end((error, response) => {
// //         response.should.have.status(200);
// //         response.should.be.json;
// //         response.body.should.be.a('object');
// //         response.body.should.have.property('message').eql('you have successfully logged in');
// //         userToken = response.body.userToken;
// //         done();
// //       });
// //   });

// //   it('It should get a sales on /api/v1/sales/:id GET', (done) => {
// //     chai.request(app)
// //       .get('/api/v1/sales/1')
// //       .set('Authorization', `Bearer ${ token }`) 
// //       .end((error, response) => {
// //         console.log(response.body);
// //         response.should.have.status(401);
// //         response.should.be.json;
// //         response.body.should.be.a('object');
// //         response.body.should.have.property('message').eql('you are not authorized');
// //         done();
// //       });
// //   });
// // });