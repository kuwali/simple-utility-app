const prettyDate = require('../src/prettyDate');
const QUnit = require('qunitjs');

QUnit.test('prettydate basics', function( assert ) {
  assert.equal(prettyDate(20), "just now");
  assert.equal(prettyDate(100), "1 minute ago");
  assert.equal(prettyDate(7000), "1 hour ago");
});