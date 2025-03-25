import "./styles.css";

let mainEl = document.createElement('main');
mainEl.appendChild(mainEl);

let mainHeader = document.createElement('main');
let Header = headers[0]; //i dont know why it didnt assign
mainHeader.style.backgroundColor = " #4a4e4d";

mainEl.innerHTML = '<h1>DOM Manipulation<h1/>';
mainEl.classList.add('flex-ctr');

let topMenuEl = document.createElement('<nav id="top-menu">');
topMenuEl.appendChild(mainEl);

topMenuEl.style.height(100);
topMenuEl.style.backgroundColor = " #0e9aa7";
topMenuEl.classList.add('flex-around');
