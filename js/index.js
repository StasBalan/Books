//create elements header
const header = document.querySelector('.header');
const container = document.createElement('div');
const headerTitle = document.createElement('h1');
//add class for elements header
container.className = 'container';
headerTitle.className = 'logo';
//add some text for title
headerTitle.innerText = 'LOGO BOOK';
//compiling header
header.appendChild(container);
container.appendChild(headerTitle);

//routing on js
let view = document.getElementById('output');

function Router (name, routes) {
    return {
        name: name,
        routes: routes
    }
}

let myFirstRouting = new Router('myFirstRouting', [
        {
            path: '/',
            name: 'Main'
        },
        {
            path: '/contact',
            name: 'Contact'
        },
        {
            path: '/about',
            name: 'About'
        }
    ]
);

let currentPath = window.location.pathname;
if(currentPath === '/') {
    view.innerHTML = 'GOGOGO';
}else {

}

console.log(myFirstRouting);