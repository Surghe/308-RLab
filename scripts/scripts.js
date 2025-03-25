import "./styles.css";

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];


// part 1
let mainEl = document.createElement('main');
mainEl.appendChild(mainEl);

let mainHeader = document.createElement('main');
mainHeader.style.backgroundColor = " #4a4e4d";

mainEl.innerHTML = '<h1>DOM Manipulation<h1/>';
mainEl.classList.add('flex-ctr');


// part 2
let topMenuEl = document.createElement('<nav id="top-menu">');
topMenuEl.appendChild(mainEl);

topMenuEl.style.height(100);
topMenuEl.style.backgroundColor = " #0e9aa7";
topMenuEl.classList.add('flex-around');

// part 3
let menuLinks = document.querySelectorAll(menuLinks);
let anchor = document.createElement('a');

for(let anchor of menuLinks){
    ++ anchor;
    console.log(item);
}

menuLinks.innerText = "Links"
menuLinks.appendChild(topMenuEl);


