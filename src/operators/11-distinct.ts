import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$ = of<number | string>(
  1,
  1,
  1,
  "1",
  1,
  1,
  2,
  4,
  2,
  5,
  6,
  1,
  1,
  1,
  7,
  7,
  8
);

numeros$.pipe(distinct()).subscribe(console.log);

interface Persnaje {
  nombre: string;
}
const personajes: Persnaje[] = [
  {
    nombre: "Megaman",
  },
  {
    nombre: "X",
  },
  {
    nombre: "Zero",
  },
  {
    nombre: "Willy",
  },
  {
    nombre: "Megaman",
  },
  {
    nombre: "X",
  },
  {
    nombre: "Zero",
  },
  {
    nombre: "Megaman",
  },
  {
    nombre: "Megaman",
  },
];

from(personajes).pipe(
    distinct(p => p.nombre)
).subscribe(console.log)