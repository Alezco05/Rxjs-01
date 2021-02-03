import { of } from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';
import { catchError, map, pluck } from 'rxjs/operators';

// const url = 'https://api.githubXXX.com/users?per_page=5';

const manejaError = (err :AjaxError) => {
    console.warn('error en:' , err.message);
    return of({});
}

const url = 'https://httpbiasn.org/delay/1';

// const obs$ = ajax.getJSON(url, {
//     'Content-Type': 'application/json',
//     'mi-token': 'ABC124'
// }).pipe(catchError(manejaError));

// const obs2$ = ajax(url).pipe(catchError(manejaError));

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABC124'
});



obs$.subscribe(
    data => console.log('data JSON: ', data),
    error => console.warn(error),
    () => console.log('complete')
);
//obs2$.subscribe(data => console.log('data Ajax: ', data));
