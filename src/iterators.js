exports.myFavouriteAuthors = {
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
  [Symbol.iterator]() {
    let currentGenreIndex = 0;
    let currentAuthorIndex = 0;
    const genres = Object.values(this.allAuthors);
    return {
      next() {
        const authors = genres[currentGenreIndex];
        const doesNotHaveMoreAuthors = !(currentAuthorIndex < authors.length);
        if (doesNotHaveMoreAuthors) {
          currentGenreIndex += 1;
          currentAuthorIndex = 0;
        }
        const doesNotHaveMoreGenre = !(currentGenreIndex < genres.length);
        if (doesNotHaveMoreGenre) {
          return {
            value: undefined, done: true,
          };
        }
        const oldCurrentAuthorIndex = currentAuthorIndex;
        currentAuthorIndex += 1;
        return {
          value: authors[oldCurrentAuthorIndex], done: false,
        };
      },
    };
  },
};
