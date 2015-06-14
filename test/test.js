var request = require('supertest');
var app = require('../app');
var should = require('should');

describe('routes', function() {

    describe('GET /', function() {

        it('?q=algo should return 200', function(done) {
            this.timeout(600000);
            request(app).get('/?q=algo').expect(200, done);
        });

        it('?q=algo should return result as array', function(done) {
            this.timeout(600000);
            request(app).get('/?q=algo').expect(function(res) {
                console.log(res.body.attachments);
                if (res.body.attachments instanceof Array) return 'Not array';
            }).end(done);
        });

        it('?q=asdr qqdqrr should return empty result', function(done) {
            this.timeout(600000);
            request(app).get('/?q=asdr qqdqrr').expect(function(res) {
                console.log(res.body || '?');
                if (res.body.attachments.length == 0) return 'No results';
            }).end(done);
        });

    });

});
