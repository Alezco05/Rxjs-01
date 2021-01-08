import { of, from, observable } from 'rxjs';

/* 
of = toma argumentos y genera una secuanecia
from = array, promise, iterable, observable 
*/

const observer = {
    next: val => console.log('next ', val),
    complete: () => console.log('complete')
};

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const miIterable = miGenerador();

/* for (let id of miIterable) {
    console.log(id);
}
 */

 from(miIterable).subscribe(observer);

//const src$ = from([1,2,3,4,5]);
//const src$ = of(...[1,2,3,4,5]);

const src$ = from<Promise<Response>>(fetch('http://api.github.com/users/Alezco05'));


src$.subscribe(async (resp) => {
    console.log(resp )
    const dataResp = await resp.json();
    console.log(dataResp);
});