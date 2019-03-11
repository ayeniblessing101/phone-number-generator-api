import supertest from 'supertest';
import chai from 'chai';
import app from '../../index';

const { expect } = chai.should();
const request = supertest(app);

describe('Phone Controller', (done) => {
  it('should return 200 when a list of phone number is displayed', (done) => {
    request
      .get('/api/v1/phone-numbers')
      .expect(200)
      .end(done);
  });

  it('should expect length of number generated to be 10', (done) => {
    const phoneNumber = '0909333376';
    request.get('/api/v1/phone-number')
      .expect(201)
      .expect(phoneNumber).to.be.a('string')
      .end(done);
  });
});