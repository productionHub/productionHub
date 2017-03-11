const chai = require('chai');
const supertest = require('supertest');
const expect = require('chai').expect;
const api = supertest('http://107.170.223.162:1337/api');

const nonexistantID = 1234567890123456;
const dummyID = null;
const dummyProductionID = null;


describe('Users:', () => {
  it('a GET/ should return a 200 response', function(done) {
    api.get('/users')
    .set('Accept', 'application/json')
    .expect(200, done);
  });

  it('a GET/ response body should be an array', function(done) {
    api.get('users')
    .set('Accept', 'application/json')
    .expect(200)
    .end(function(err, res) {
      expect(res.body).to.be.an('array');
      done();
    });
  });

  it('a GET/ to a nonexistant user should return a 404', function(done) {
    api.get('/user/' + nonexistantID)
    .set('Accept', 'application/json')
    .expect(404, done);
  });

  it('a GET/ to a specific user should return a 200', function(done) {
    api.get('/user/' + dummyID)
    .set('Accept', 'application/json')
    .expect(200, done);
  });

  it('a GET/ to a specific user should respond with the correct user object', function(done) {
    api.get('/user/' + dummyID)
    .set('Accept', 'application/json')
    .expect(function(err, res) {
      expect(res.body).to.be.an('array');
      expect(res.body[0].firstName).to.equal('Timothy');
      expect(res.body[0].lastName).to.equal('Chin');
      expect(res.body[0].email).to.equal('timm.chin@gmail.com');
      expect(res.body[0].phone).to.equal('9092636664');
      expect(res.body[0].role).to.equal('gaffer');
      expect(res.body[0].production).to.be.an('array');
      expect(res.body[0].production[0]).to.equal(dummyProductionID);
    });

    xit('a POST/ to users should create a user object', function(done) {
      api.post('/users')
      .send({
        firstName: 'Testerino',
        lastName: 'Testerson'
      })
      .expect(201)
      .end(function(err, res) {
        expect(res.body).to.be.an('object');
        expect(res.body.params.userId).to.exist();
      });
    });
  });

});