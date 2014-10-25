var should = require('chai').should();
var assert = require('chai').assert;
var expect = require('chai').expect;
describe('Tests', function(){
  it('Should have expect', function(){
    expect(true).to.be.ok;
  });
  it('Should have should', function(){
    ({}).should.be.ok;
  });
  it('Should assert', function(){
    assert(true, 'is true');
  })
});
