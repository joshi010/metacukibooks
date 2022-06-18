//img rank
const rank1IMG = document.getElementById('rank-1-img');
const rank2IMG = document.getElementById('rank-2-img');
const rank3IMG = document.getElementById('rank-3-img');
const rank4IMG = document.getElementById('rank-4-img');

//title rank
const tit1 = document.getElementById('h2-1');
const tit2 = document.getElementById('h2-2');
const tit3 = document.getElementById('h2-3');
const tit4 = document.getElementById('h2-4');

//autor rank
const aut1 = document.getElementById('aut-1');
const aut2 = document.getElementById('aut-2');
const aut3 = document.getElementById('aut-3');
const aut4 = document.getElementById('aut-4');

class book {
    constructor(name, autor, image, source){
        this.name = name;
        this.autor = autor; 
        this.image = image;
        this.source = source;
        this.rank = 0;
    }

    ranking(){
        return this.rank + 1;
    }
}

let sombra = new book('La Sombra del Viento', 'Carlos Ruiz Zafón', 'https://images.penguinrandomhouse.com/cover/700jpg/9780593207208', './pages/descubrir.html');
let corazon = new book('Corazón de Tinta', 'Cornelia Funke', 'https://images.cdn2.buscalibre.com/fit-in/360x360/30/bb/30bbd0c177ca8cf7859a151b18cde7cb.jpg');
let miserables = new book('Los Miserables', 'Victor Hugo', 'https://upload.wikimedia.org/wikipedia/commons/9/99/Ebcosette.jpg');
let malala = new book('Yo Soy Malala', 'Malala Yousafzai', 'https://imagessl.casadellibro.com/img/autores/malala.jpg')

let arr = [sombra.image, corazon.image, miserables.image, malala.image]
let  autArr = [sombra.autor, corazon.autor, miserables.autor, malala.autor]
let titArr = [sombra.name, corazon.name, miserables.name, malala.name]
let source = [sombra.source, corazon.source, miserables.source, malala.source]

rank1IMG.src = arr[0];
rank2IMG.src = arr[1];
rank3IMG.src = arr[2];
rank4IMG.src = arr[3];

tit1.innerHTML = titArr[0];
tit2.innerHTML = titArr[1];
tit3.innerHTML = titArr[2];
tit4.innerHTML = titArr[3];

aut1.innerHTML = autArr[0];
aut2.innerHTML = autArr[1];
aut3.innerHTML = autArr[2];
aut4.innerHTML = autArr[3];