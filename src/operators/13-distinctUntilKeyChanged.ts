import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

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
    nombre: "X",
  },
  {
    nombre: "X",
  },
  {
    nombre: "Megaman",
  },
];

from(personajes)
  .pipe(distinctUntilKeyChanged('nombre'))
  .subscribe(console.log);
