import { fromEvent } from "rxjs";
import { first, take, tap } from "rxjs/operators";

const click$ = fromEvent(document, "click");

click$.pipe(
    tap(console.log),
    first<MouseEvent>(e => e.clientY >= 150)
).subscribe({
  next: (val) => console.log("next ", val),
  complete: () => console.log("complete"),
});
