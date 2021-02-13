// Navigation //
const div0 = document.createElement('div');
div0.className = 'row';
const container = document.getElementById('container');
container.appendChild(div0);

const nav = document.createElement('nav');
nav.className = 'col navbar navbar-expand-xs bg-oniPink rounded m-3';
div0.appendChild(nav);

const a0 = document.createElement('a');
const a1 = document.createElement('a')
a0.className = 'navbar-brand';
a0.href = 'index.html';
a1.className = 'nav-link';
a1.href = '#';
a1.textContent = 'Panier';
nav.appendChild(a0);
nav.appendChild(a1);

const img0 = document.createElement('img');
img0.className = 'bg-oniPink';
img0.src = 'images/logo.png';
img0.alt = 'Logo Orinoco';
img0.width = '200';
a0.appendChild(img0);