import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Siguiente [next] ', value),
    error: error => console.warn('Error [obs]', error),
    complete: () => console.info('Completado [obs]')
};

// const obs$ = Observable.create()
const obs$: Observable<string> = new Observable(subs =>{
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    //Forzar un error
    const a = undefined;
    a.nombre = 'Jhon';
    subs.complete();
});

obs$.subscribe(observer);

/* obs$.subscribe(
    resp => console.log('Next: ',resp),
    error => console.warn('Error: ',error),
    () => console.info('Completado')
);
 */




