class BookFactory {
  constructor() {
    this.book = null;
    this.name = '';
    this.genres = [];
    this.desc = '';
    this.rating = 0;
  }

  setBook(book) {
    this.book = book;
    this.name = book.name;
    this.genres = book.genres;
    this.desc = book.desc;
    this.rating = book.rating;
  }

  get bookName() {
    return this.name;
  }
  get descInfo() {
    return this.desc;
  }
  get bookGenresAsString() {
    const bookString = this.genres.join(', ');
    return bookString;
  }
  get ratingInfo() {
    return this.rating;
  }
}

const bookStore = new BookFactory();

export default bookStore;
