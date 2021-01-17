import { fromEvent } from "rxjs";
import { map, takeWhile, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(
    map(({x,y}) => ({x,y})),
    // EL true manda el ultimo argumento
    takeWhile(({y}) => y <= 150, true)
).subscribe({
  next: (val) => console.log("next ", val),
  complete: () => console.log("complete"),
});
