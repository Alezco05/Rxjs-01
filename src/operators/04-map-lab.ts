import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement("div");
texto.innerHTML = `


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus lectus, ultrices a lacinia eget, luctus non odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus porta mauris cursus condimentum ultrices. Praesent non est mollis, fermentum lectus sed, commodo nunc. Integer nec nunc urna. Mauris sed purus volutpat dui faucibus fermentum. Sed odio enim, dignissim ut dolor at, mattis eleifend metus. Pellentesque laoreet, nulla sit amet euismod placerat, massa justo sagittis neque, vel elementum enim felis vel nisi. Cras eget ligula eu lorem bibendum ultricies eget in velit. Aliquam sed velit malesuada mi sagittis porta non ac nisl. Curabitur ultrices erat vel metus consectetur auctor. Proin dictum, purus sed eleifend rutrum, urna lorem ultricies ante, id varius eros elit sed diam. Donec porta ligula id mauris tincidunt, sed congue mauris pellentesque. Sed sodales risus et felis malesuada, ac ornare urna aliquet. Morbi luctus odio nec nisi imperdiet, vel ultrices sem sagittis.
<br><br>
Cras id augue eu massa vestibulum vulputate et id enim. Integer varius ex mauris, at luctus erat pulvinar vel. Donec non justo pellentesque leo tincidunt interdum. Duis nec libero eleifend, facilisis augue at, fermentum nibh. Quisque pellentesque ligula a dolor tempus, sit amet scelerisque justo tempor. Sed feugiat, justo in tempor volutpat, lorem ex semper enim, sed aliquet nulla lectus et nulla. Aenean at lacinia urna, vitae rutrum turpis. Phasellus consectetur non velit vitae ullamcorper. Mauris porta lacus metus, vitae tempor est fermentum in. Duis malesuada nibh vitae lacus pharetra scelerisque. Suspendisse potenti. Donec posuere leo nec urna interdum, ut suscipit lectus ultrices. Sed sit amet mi at erat laoreet interdum. Pellentesque blandit pharetra elementum.
<br><br>
Nulla eu risus vulputate, blandit dolor et, accumsan mi. Suspendisse sed eros eget metus eleifend iaculis. Ut maximus mi non venenatis semper. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas porttitor aliquam euismod. Aliquam ultricies, magna non cursus facilisis, magna felis egestas magna, in ullamcorper velit velit tristique nisi.
<br><br>
Nam tempor mollis lacinia. Vestibulum id congue leo, eu egestas dolor. Sed ornare a purus facilisis luctus. Etiam volutpat finibus eros, eget gravida purus gravida a. Etiam scelerisque ultrices nisl, ut faucibus magna accumsan ac. Duis a orci elit. Aliquam nec ipsum eget arcu interdum molestie. Cras dictum volutpat dignissim. Vestibulum eu ante eros. Morbi accumsan turpis sed pretium sollicitudin. Quisque fermentum sem eu lacinia suscipit. Aenean non risus est. Morbi malesuada massa sed justo luctus feugiat. Pellentesque tempus, risus in congue molestie, justo augue pulvinar orci, maximus vehicula eros massa quis urna. Morbi efficitur sem eros, ut aliquet sapien eleifend sed. Vestibulum blandit velit erat, nec lobortis nibh ultrices et.
<br><br>
Pellentesque facilisis dolor erat, a bibendum nibh volutpat at. Praesent sed risus vitae dolor fringilla posuere non sit amet ante. Aliquam sagittis dolor at sodales vulputate. Mauris non sapien eu dolor ornare elementum. Praesent aliquet leo non magna scelerisque cursus. Ut vulputate a metus non tempus. Sed ut dolor risus. Maecenas egestas nibh augue, eget placerat dolor cursus quis. Mauris ullamcorper tellus eget massa hendrerit iaculis. Quisque feugiat, erat eget sagittis tristique, enim erat bibendum arcu, ut facilisis elit lorem id magna.

`;
const body = document.querySelector("body");
body.append(texto);
const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight,
  } = event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};
// Streams

const scroll$ = fromEvent(document, "scroll");

// scroll$.subscribe(console.log)

const progess$ = scroll$.pipe(map(calcularPorcentajeScroll), tap(console.log));

progess$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
