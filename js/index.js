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