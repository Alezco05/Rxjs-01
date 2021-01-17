import { from } from "rxjs";
import { map, reduce, scan, take, tap } from "rxjs/operators";

const numbers: number[] = [1, 2, 3, 4, 5];

/* const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
} */

const totalReducer = (acc, cur) => acc + cur;

// Reduce
from(numbers).pipe(reduce(totalReducer, 0)).subscribe(console.log);

// Scan
from(numbers).pipe(scan(totalReducer, 0)).subscribe(console.log);

//Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}
const user: Usuario[] = [
  { id: "1", autenticado: false, token: null },
  { id: "2", autenticado: true, token: "AVC" },
  { id: "3", autenticado: true, token: "AVSA12" },
];

const state$ = from(user).pipe(
  scan<Usuario>(
    (acc, cur) => {
      return { ...acc, ...cur };
    },
    { edad: 33 }
  )
);
const id$ = state$.pipe(map((state) => state.id));

id$.subscribe(console.log);
