var request = require('supertest');
describe('generic Server test suite ', function () {
  var server;
  beforeEach(function () {
    server = require('../server/index');
  });
  afterEach(function () {
    server.close();
  });
  it('responds to /', () => {
    request(server)
        .get('/api')
        .expect(200);
  });
  it('200 everything else', () => {
    request(server)
        .get('/*')
        .expect(200);
  });
});