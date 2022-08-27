import { arr } from './bek-info.js';

const dataBook = document.querySelector('[data-book-card2]');
const bookCont = document.querySelector('[data-book-container2]');
const searchInput = document.querySelector('[book-search2]');

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
    const header = card.querySelector('[data-header2]');
    const body = card.querySelector('[data-body2]');
    const image = card.querySelector('[image-template2]');

    header.textContent = book.name;
    body.textContent = book.author;
    image.src = book.image;

    bookCont.append(card);

    return { name: book.name, author: book.author, link: book.link, element: card };
})

ary.forEach(e => {
    e.element.onclick = () => {
        window.open(e.link);
    }
    console.log(e.link);
})