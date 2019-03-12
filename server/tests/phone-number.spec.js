require('iconv-lite/encodings');
const mock = require('mock-fs');
const chai = require('chai');
const request = require('chai-http');

const { expect } = chai;
chai.should();
chai.use(request);

const { getPhoneNumbers, createPhoneNumbers } = require('../controllers/phoneNumberController');
const app = require('../../index');

describe('Phone Controller: GET', () => {
  it('should return 200 and existing numbers when they exists', (done) => {
    mock({
      'server/phone-numbers.txt': '0123456789,0112233445'
    });
    chai.request(app)
      .get('/api/v1/phone-numbers', getPhoneNumbers)
      .end((err, res) => {
        if (!err) {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('phoneNumbers').with.lengthOf(2);
          mock.restore();
          done();
        }
      });
  });
  it('should return 200 and expect it to have a property of message', (done) => {
    mock({
      'server/phone-numbers.txt': '0123456789,0112233445'
    });
    chai.request(app)
      .get('/api/v1/phone-numbers', getPhoneNumbers)
      .end((err, res) => {
        if (!err) {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('message').equal('Phone Number fetched successfully');
          mock.restore();
          done();
        }
      });
  });
  it('should return 200 and a message if empty file exists', (done) => {
    mock({
      'server/phone-numbers.txt': ''
    });
    chai.request(app)
      .get('/api/v1/phone-numbers', getPhoneNumbers)
      .end((err, res) => {
        if (!err) {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('message').equal('There are no Phone Numbers yet!');
          mock.restore();
          done();
        }
      });
  });

  it('should return 201 and a message if phone number is generate successfully', (done) => {
    mock({
      'server/phone-numbers.txt': ''
    });
    chai.request(app)
      .get('/api/v1/phone-number', createPhoneNumbers)
      .end((err, res) => {
        if (!err) {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property('message').equal('Phone Number generated successfully');
          mock.restore();
          done();
        }
      });
  });

});