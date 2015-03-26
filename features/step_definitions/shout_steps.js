var chai = require('chai');
var expect = chai.expect;

var World = require('../support/world');

module.exports = function () {
  this.World = World.DomainWorld;

  this.Given(/^Lucy is (\d+)m away from Sean$/, function (distance, callback) {
    this.registerPerson('sean');
    this.registerPerson('lucy');
    callback();
  });

  this.When(/^Sean shouts "([^"]*)"$/, function (message, callback) {
    this.makePersonShout('sean', message, callback);
  });

  this.Then(/^Lucy should hear "([^"]*)"$/, function (message, callback) {
    expect(this.lucy.heardMessages).to.include(message);
    callback();
  });
};
