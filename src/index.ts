import {Observable} from 'rxjs';

// const obs$ = Observable.create()
const obs$: Observable<string> = new Observable(subs =>{
    subs.next('Hola');
    subs.next('Mundo');
    subs.complete();
});

obs$.subscribe(console.log);





