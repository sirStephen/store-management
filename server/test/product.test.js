import chaiHttp from 'chai-http';
import chai from 'chai';

import app from '../server';

let token;
const should = chai.should();
chai.use(chaiHttp);

// TEST FOR PRODUCTS
describe('Products', () => {
  before((done)=>{
    const admin = {
      username: 'sir.gregg',
      password: 'password1'
    }
    chai.request(app)
      .post('/api/v1/users/login')
      .send(admin)
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('you have successfully logged in');
        token = response.body.token;
        
        done();
      });
  });

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

  it('It should get a SINGLE PRODUCT on /api/v1/products/:id GET', (done) => {
    chai.request(app)
      .get('/api/v1/products/2')
      .end((error, response) => {
        console.log(response.body)
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('found product');
        done();
      });
  });

  it('It should get a SINGLE PRODUCT on /api/v1/products/:id GET (should fail)', (done) => {
    chai.request(app)
      .get('/api/v1/products/a')
      .end((error, response) => {
        response.should.have.status(406);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('The product id must be an integer');
        done();
      });
  });

  it('It should get a SINGLE PRODUCT on /api/v1/products/:id GET', (done) => {
    chai.request(app)
      .get('/api/v1/products/999')
      .end((error, response) => {
        response.should.have.status(404);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('no product found');
        done();
      });
  });

  it('It should get a CREATE PRODUCT on /api/v1/products/:id GET', (done) => {
    chai.request(app)
      .post('/api/v1/products')
      .set('Authorization', `Bearer ${ token }`) 
      .send({ productname: 'bread', price: 300, quantity: 3, minquantity: 3, createat: 'NOW()' })
      .end((error, response) => {
        console.log(response.body);
        response.should.have.status(201);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('product was created');
        done();
      });
  });

  it('It should get a CREATE PRODUCT on /api/v1/products/:id GET', (done) => {
    chai.request(app)
      .post('/api/v1/products')
      .send({ productname: 1, price: 300, quantity: 3, minquantity: 3, createat: 'NOW()' })
      .end((error, response) => {
        console.log(response.body);
        response.should.have.status(400);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('product name must be a string');
        done();
      });
  });

  it('It should get a CREATE PRODUCT on /api/v1/products/:id GET', (done) => {
    chai.request(app)
      .post('/api/v1/products')
      .send({ productname: '', price: 300, quantity: 3, minquantity: 3, createat: 'NOW()' })
      .end((error, response) => {
        console.log(response.body);
        response.should.have.status(400);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('ensure all fields are completely filled');
        done();
      });
  });

  it('It should get a CREATE PRODUCT on /api/v1/products/:id GET', (done) => {
    chai.request(app)
      .post('/api/v1/products')
      .send({ productname: 'bread', price: '300', quantity: 3, minquantity: 3, createat: 'NOW()' })
      .end((error, response) => {
        console.log(response.body);
        response.should.have.status(400);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('value must be an integer');
        done();
      });
  });

  it('It should get a CREATE PRODUCT on /api/v1/products/:id GET', (done) => {
    chai.request(app)
      .post('/api/v1/products')
      .send({ productname: 'bread', price: 300, quantity: 3, minquantity: 2, createat: 'NOW()' })
      .end((error, response) => {
        console.log(response.body);
        response.should.have.status(400);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('ensure the minimum quantity or quantity is not less than 3');
        done();
      });
  });

  it('It should get a CREATE PRODUCT on /api/v1/products/:id GET', (done) => {
    chai.request(app)
      .put('/api/v1/products/2')
      .set('Authorization', `Bearer ${ token }`) 
      .send({ productname: 'bread', price: 300, quantity: 3, createat: 'NOW()' })
      .end((error, response) => {
        console.log(response.body);
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('product was updated successfully');
        done();
      });
  });

  it('It should get a CREATE PRODUCT on /api/v1/products/:id GET', (done) => {
    chai.request(app)
      .put('/api/v1/products/as')
      .set('Authorization', `Bearer ${ token }`) 
      .send({ productname: 'bread', price: 300, quantity: 3, createat: 'NOW()' })
      .end((error, response) => {
        console.log(response.body);
        response.should.have.status(404);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('Please make sure it is an integer');
        done();
      });
  });

  it('It should DELETE PRODUCT on /api/v1/products/:id GET', (done) => {
    chai.request(app)
      .delete('/api/v1/products/999')
      .set('Authorization', `Bearer ${ token }`) 
      .end((error, response) => {
        console.log(response.body);
        response.should.have.status(404);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('product id does not exist');
        done();
      });
  });

  it('It should DELETE PRODUCT on /api/v1/products/:id GET', (done) => {
    chai.request(app)
      .delete('/api/v1/products/a')
      .set('Authorization', `Bearer ${ token }`) 
      .end((error, response) => {
        console.log(response.body);
        response.should.have.status(406);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('Please make sure it is an integer');
        done();
      });
  });

  it('It should DELETE PRODUCT on /api/v1/products/:id GET', (done) => {
    chai.request(app)
      .delete('/api/v1/products/999')
      .set('Authorization', `Bearer ${ token }`) 
      .end((error, response) => {
        console.log(response.body);
        response.should.have.status(404);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('message').eql('product id does not exist');
        done();
      });
  });

    // it('It should DELETE PRODUCT on /api/v1/products/:id GET', (done) => {
  //   chai.request(app)
  //     .delete('/api/v1/products/1')
  //     .set('Authorization', `Bearer ${ token }`) 
  //     .send({ productname: 'bread', price: 300, quantity: 3, createat: 'NOW()' })
  //     .end((error, response) => {
  //       console.log(response.body);
  //       response.should.have.status(200);
  //       response.should.be.json;
  //       response.body.should.be.a('object');
  //       response.body.should.have.property('message').eql('product was delete successfully');
  //       done();
  //     });
  // });
});