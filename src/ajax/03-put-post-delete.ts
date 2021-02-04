import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, map, pluck } from "rxjs/operators";

const url = "https://httpbin.org/delay/1";

/* ajax.post(
  url,
  {
    id: 1,
    nombre: "Jhon",
  },
  { 'mi-toke': 'ABC134' }
).subscribe(console.log);
 */

 ajax({
     url,
     method: 'POST',
     headers: {
         'mi-token': 'ABC12'
     }, 
     body: {
         id: 1,
         nombre: 'Jhon'
     }
 }).subscribe(console.log)