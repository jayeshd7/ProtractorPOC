const chai = require('chai');
const mocha = require('mocha');
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

let a = 2 , b= 2;

expect(a).to.be.equals(b);
a.should.to.equal(b);
assert.equal(a,b);