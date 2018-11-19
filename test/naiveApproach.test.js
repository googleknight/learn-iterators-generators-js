const Lab = require('lab');
const Chai = require('chai');
const { getAuthors } = require('../src/naiveApproach');

exports.lab = Lab.script();
const { lab } = exports;
const { expect } = Chai;

lab.experiment('Testing getAuthors', () => {
  lab.test('should successfully returns all authors', () => {
    const res = getAuthors();
    expect(res.length).to.eqls(10);
  });
});
