const Lab = require('lab');
const Chai = require('chai');
const { getAuthors } = require('../src/naiveApproach');

exports.lab = Lab.script();
const { lab } = exports;
const { expect } = Chai;

lab.experiment('Testing getAuthors', () => {
  lab.test('should successfully returns all authors', () => {
    const actualNumberOfAuthors = getAuthors().length;
    const expectedNumberOfAuthors = 10;
    expect(actualNumberOfAuthors).to.eqls(expectedNumberOfAuthors);
  });
});
