let btn = document.querySelector('#publicar');
let caCont = document.getElementById('card-grid');
let btn2 = document.querySelector('#niggers');



const newBook = () => {
    let titleInput = document.getElementById('titulo').value;
    let authorInput = document.getElementById('autor').value;
    const el = document.createElement('div');
    const img = document.createElement('div');
    const info = document.createElement('div');
    el.classList.add('card');
    img.classList.add('img-container');
    info.classList.add('info');

    
    const title = document.createElement('h2');
    const author = document.createElement('p');

    title.textContent = titleInput;
    author.textContent = authorInput;

    info.appendChild(title);
    info.appendChild(author);
    caCont.appendChild(el);
    el.appendChild(img);
    el.appendChild(info);


}

btn.onclick = () => {
    newBook();}

btn2.onclick = () => {
    newBook();
}
