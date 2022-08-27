//for search funciton
import { arr } from './book-info.js';

//search function
const dataBook = document.querySelector('[data-book-card]');
const bookCont = document.querySelector('[data-book-container]');
const searchInput = document.querySelector('[book-search]');

let ary = [];

searchInput.oninput = (e) => {
    const value = e.target.value.toLowerCase();
    
    ary.forEach(book => {
        const isVisible = book.name.toLowerCase().includes(value) || book.author.toLowerCase().includes(value);
        book.element.classList.toggle('hide', !isVisible);
    })
}

ary = arr.map((book) => {
    const card = dataBook.content.cloneNode(true).children[0];
    const header = card.querySelector('[data-header]');
    const body = card.querySelector('[data-body]');
    const image = card.querySelector('[image-template]');

    header.textContent = book.name;
    body.textContent = book.author;
    image.src = book.image;

    bookCont.append(card);

    return { name: book.name, author: book.author, element: card };
})

