const Lab = require('lab');
const Chai = require('chai');
const { myFavouriteAuthors } = require('../src/iterators');

exports.lab = Lab.script();
const { lab } = exports;
const { expect } = Chai;

lab.experiment('Testing myFavouriteAuthors', () => {
  lab.test('should successfully returns all authors', () => {
    let actualNumberOfAuthors = 0;
    const expectedNumberOfAuthors = 10;
    for (const author of myFavouriteAuthors) {
      console.log(author);
      actualNumberOfAuthors += 1;
    }
    expect(actualNumberOfAuthors).to.eqls(expectedNumberOfAuthors);
  });
});
