import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const numeros$ = range(1, 5);

numeros$
  .pipe(
    tap((x) => {
      console.log("antes", x);
      return 100;
    }),
    map((x) => x * 10),
    // tap((x) => console.log("Despues ", x)),
    tap({
      next: (val) => console.log("Despues ", val),
      complete: () => console.log("Se termino todo"),
    })
  )
  .subscribe((x) => console.log("subs ", x));
