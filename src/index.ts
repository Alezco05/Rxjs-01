import { Observable, Observer, Subscription } from "rxjs";

const observer: Observer<string> = {
  next: (value) => console.log("Siguiente [next] ", value),
  error: (error) => console.warn("Error [obs]", error),
  complete: () => console.info("Completado [obs]"),
};

const intervalos$: Observable<number> = new Observable<number>((subs) => {
  let i: number = 0;
  const interval = setInterval(() => {
    subs.next(i++);
  }, 1000);
  return () => {
    clearInterval(interval);
    console.log("intervalo destruido");
  };
});

const subs1: Subscription = intervalos$.subscribe((num) =>
  console.log("Num: ", num)
);

const subs2: Subscription = intervalos$.subscribe((num) =>
  console.log("Num: ", num)
);

const subs3: Subscription = intervalos$.subscribe((num) =>
  console.log("Num: ", num)
);

setTimeout(() => {
  subs1.unsubscribe();
  subs2.unsubscribe();
  subs3.unsubscribe();
  console.log("Completado timeout");
}, 3000);
