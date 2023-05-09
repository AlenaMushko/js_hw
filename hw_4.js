// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title: 'To Kill a Mockingbird',
        pages: 281,
        authors: ['Harper Lee'],
        genres: ['Classic', 'Fiction', 'Dystopian']
    },
    {
        title: '1984',
        pages: 328,
        authors: ['George Orwell'],
        genres: ['Dystopian', 'Political fiction']
    },
    {
        title: 'The Great Gatsby',
        pages: 218,
        authors: ['F. Scott', 'Fitzgerald'],
        genres: ['Classic', 'Fiction']
    },
    {
        title: 'Pride and Prejudice',
        pages: 279,
        authors: ['Jane Austen'],
        genres: ['Classic', 'Romance']
    },
    {
        title: 'The Lord of the Rings',
        pages: 1178,
        authors: ['J. R.', ' R. Tolkien'],
        genres: ['Fantasy', 'Adventure']
    }
];
// -знайти наібльшу книжку.
let bigBook;
for (let book of books) {
    bigBook = Math.max(book.pages);
}
console.log('bigBook', bigBook)
// - знайти книжку/ки з найбільшою кількістю жанрів
let genresBook;
for (let book of books) {
    console.log(book.genres.length)
    genresBook = Math.max(book.genres.length);
}
// console.log('bigBook', genresBook)
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор