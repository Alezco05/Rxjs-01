import { range, from, fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";

range(20, 30)
    .pipe(filter((x, i) => x % 2 === 1))
    .subscribe(console.log);

interface Personaje {
    tipo: string;
    nombre: string;
}
// { tipo: string; nombre: string }[]
const personajes: Personaje[] = [
    { tipo: "heroe", nombre: "batman" },
    { tipo: "heroe", nombre: "Robin" },
    { tipo: "villano", nombre: "Joker" },
];

from(personajes)
    .pipe(filter((x) => x.tipo === "heroe"))
    .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(x => x.code),
    filter(x => x === 'Enter')
);

keyUp$.subscribe(console.log);