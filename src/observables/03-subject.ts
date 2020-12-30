import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("Siguiente [next] ", value),
  error: (error) => console.warn("Error [obs]", error),
  complete: () => console.info("Completado [obs]"),
};

const intervalos$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => subs.next(Math.random()), 1000);
  return () => {
    clearInterval(intervalID);
    console.log("Intervalo destruido");
  };
});
/* 
1 - casteo multiple
2 - tambien es un observer
3 - Next, error y complete
 */
const subjet$ = new Subject();
const suscription = intervalos$.subscribe(subjet$);

const subs1 = subjet$.subscribe(observer);
const subs2 = subjet$.subscribe(observer);

setTimeout(() => {
  subjet$.next(10);
  subjet$.complete();
  suscription.unsubscribe();
}, 3000);

/* 
   const subs1 = intervalos$.subscribe(rnd => console.log('subs1 ', rnd));
   const subs2 = intervalos$.subscribe(rnd => console.log('subs2 ', rnd));
 */
