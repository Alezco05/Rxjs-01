import { fromEvent } from "rxjs";
import { auditTime, map, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(
    map(({ x, y }) => ({ x, y })),
    tap(val => console.log('tap ', val)),
    auditTime(5000)
    ).subscribe(console.log);
