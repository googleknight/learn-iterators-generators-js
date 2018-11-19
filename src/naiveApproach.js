const myFavouriteAuthors = {
  allAuthors: {
    fiction: [
      'Agatha Christie',
      'J. K. Rowling',
      'Dr. Seuss',
    ],
    scienceFiction: [
      'Neal Stephenson',
      'Arthur Clarke',
      'Issac Asimov',
      'Robert Heinlein',
    ],
    fantasy: [
      'J R. R. Tolkien',
      'J. K. Rowling',
      'Terry Pratchett',
    ],
  },
};

console.log('Iterating over each author');
exports.getAuthors = () => {
  const authors = [];
  Object.keys(myFavouriteAuthors).forEach((allAuthors) => {
    const genres = myFavouriteAuthors[allAuthors];
    return Object.keys(genres).forEach((genre) => {
      Object.values(genres[genre]).forEach((author) => {
        console.log(author);
        authors.push(author);
      });
    });
  });
  return authors;
};
