import chai, { assert, expect } from 'chai';
import chaiHttp from '../../../../../.cache/typescript/2.9/node_modules/@types/chai-http';
import server from '../server';

chai.use(chaiHttp);

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
