var request = require('supertest');

describe('Run Unit Tests', function() {
    var server;
    beforeEach(function() {
        server = require('./../app');
    });
    this.afterEach(function() {
        server.close();
    });
    it('Responds to Marco with Polo', function testSlash(done) {
        request(server)
            .get('/marco')
            .expect('Polo!')
            .expect(200, done);
    });
    it('404 to everything else', function testPath(done)
    {
        request(server)
            .get('/')
            .expect(404, done);
    });
});