import { Shelf } from "./Cshelf.js";
import { books } from "./data.js";

console.log("");
console.log("---------- Ejercicio 2, Modelado ----------");
const shelf = new Shelf(1, "Estante A", 100, 200, 30, 10);

// Agregar los libros al estante
books.forEach((book) => shelf.addBook(book));

console.log("Cantidad de libros en el estante:", shelf.getBookCount());
console.log("Porcentaje de llenado del estante:", shelf.getPercentage());
console.log("Valor total de los libros en el estante:", shelf.getTotalValue());
console.log("Libro más caro:", shelf.getMostExpensiveBook());
console.log("Libros ordenados alfabéticamente:", shelf.getBooksSorted());
console.log("Libros de género 'Ficción':", shelf.getBooksByGenre("Ficción"));
