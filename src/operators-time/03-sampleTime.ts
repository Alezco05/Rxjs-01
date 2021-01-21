import { fromEvent } from "rxjs";
import { map, sampleTime } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(
    sampleTime(2000),
    map(({ x, y }) => ({ x, y })),
    sampleTime(2000),
    ).subscribe(console.log);
