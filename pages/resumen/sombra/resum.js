import { arr } from './resum-data.js';

const resumSearch = document.querySelector('[resumenes]');
const resCont = document.querySelector('[resumen-container]');

const newLi = document.querySelector('[join-etiq]');
const liCont = document.querySelector('.tags1');

let ary = [];


ary = arr.map(info => {
    const card = resumSearch.content.cloneNode(true).children[0];
    const title = card.querySelector('[nombre-resumen]');
    const autor = card.querySelector('[autor-resumen]');

    title.textContent = info.name;
    autor.textContent = info.author;

    resCont.append(card);

    console.log(info.byChapt)

    return { name: info.name, author: info.author, link: info.link, element: card};
})