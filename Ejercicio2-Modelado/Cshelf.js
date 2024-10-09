export class Shelf {
  constructor(id, location, width, height, depth, maxCapacity) {
    this.id = id;
    this.location = location;
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.maxCapacity = maxCapacity;
    this.books = [];
  }

  // Agregar libro al estante
  addBook(book) {
    this.books.length < this.maxCapacity
      ? this.books.push(book)
      : console.log("No se puede agregar más libros, el estante está lleno.");
  }

  //   a) Calcular la cantidad de libros que tiene un estante en un momento determinado.
  getBookCount() {
    return this.books.length;
  }

  //   b) Calcular el porcentaje de llenado de un estante de acuerdo a su capacidad máxima.
  getPercentage() {
    return (this.getBookCount() / this.maxCapacity) * 100 + "%";
  }

  //   c) Calcular el valor total de los libros de un estante.
  getTotalValue() {
    return this.books.reduce((total, book) => total + book.price, 0);
  }

  //   d) Obtener el libro más caro de un estante .
  getMostExpensiveBook() {
    if (this.books.length === 0) {
      return "No hay libros en el estante";
    }
    return this.books.reduce((mostExpensive, book) => {
      return book.price > mostExpensive.price ? book.name : mostExpensive;
    });
  }

  //   e) Obtener el listado de libros de un estante ordenados alfabéticamente.
  getBooksSorted() {
    return this.books.sort((a, b) => a.name.localeCompare(b.name));
  }

  //   f) Obtener los libros de un género “X” que están en un estante
  getBooksByGenre(genre) {
    return this.books.filter((book) => book.genre === genre);
  }
}
