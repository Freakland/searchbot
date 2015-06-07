var request = require('supertest');
var app = require('../app');
var should = require('should');

describe('routes', function() {

    describe('GET /', function() {

        it('return 200', function(done) {
            
            this.timeout(600000);
            request(app).get('/?q=algo').expect(200, done);

        });

    });

});
