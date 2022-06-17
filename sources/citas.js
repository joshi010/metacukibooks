const citas = document.getElementById('genera-cita');
const autor = document.getElementById('autor');
const btn = document.getElementById('generate');


class citasLibro {
    constructor(cita, autor){
        this.cita = cita;
        this.autor = autor;
    }
    

}

let cita1 = new citasLibro('Y así seguimos adelante, botes contra la corriente, empujados sin descanso hacia al pasado', 'El gran Gatsby')
let cita2 = new citasLibro('El misterio de la vida no es un problema a resolver, sino una realidad a experimentar', 'Duna');
let cita3 = new citasLibro('Estar solo no tiene nada que ver con cuantas personas hay alrededor', 'Revolutionary Road');
let cita4 = new citasLibro('Sea un hombre o sea más que un hombre. Sea firme con su propósito y firme como una piedra', 'Frankestein');
let cita5 = new citasLibro('El hombre débil se vuelve fuerte cuando no tiene nada, porque sólo entonces puede sentir la locura de la desesperación', 'La compañía blanca');


const randomQuote = () => {
    let arr = [cita1, cita2, cita3, cita4, cita5]
    let rand = Math.floor(Math.random() * arr.length - 1);
    citas.innerHTML = arr[rand].cita;
    autor.innerHTML = `—${arr[rand].autor}` ;
    console.log(rand);

}

window.onload = () => {
    randomQuote();
}

btn.onclick = () => {
    randomQuote();
}