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

const params = new URLSearchParams(document.location.search);
const id = params.get('id');

fetch('http://localhost:3000/api/teddies/' + id)
    .then(response => response.json())
    .then(function(data) {

        let section = document.createElement('section');
        container.appendChild(section);
        section.className = 'd-flex flex-md-row flex-column bg-oniPink p-3 rounded';
        section.id = 'section';
            
        let figure = document.createElement('figure');
        section.appendChild(figure);
        figure.className = 'me-5';

        let teddyImg = document.createElement('img');
        figure.appendChild(teddyImg);
        teddyImg.className = 'figure-img img-fluid rounded object-cover cursor-pointer';
        teddyImg.id = 'teddyImg';
        teddyImg.src = data.imageUrl;

        let div1 = document.createElement('div');
        section.appendChild(div1);
        div1.className = 'mx-3 w-auto bg-oniPink';

        let teddyName = document.createElement('h4');
        div1.appendChild(teddyName);
        teddyName.id = 'teddyName';
        teddyName.textContent = ('Voici le bel Ours ' + data.name);

        let teddyDescription = document.createElement('p');
        div1.appendChild(teddyDescription);
        teddyDescription.id = 'teddyDescription';
        teddyDescription.textContent = data.description;

        let h2 = document.createElement('h4');
        div1.appendChild(h2);
        h2.className = 'text-bold font-lg font-bold mt-5';
        h2.textContent = 'Choisissez la couleur de votre ours :';

        let div2 = document.createElement('div');
        div1.appendChild(div2);
        div2.className = 'row';

        data.colors.forEach(element => {
            let div3 = document.createElement('div');
            div2.appendChild(div3);
            div3.id = 'teddyColors';
            div3.className = 'rounded mx-1 my-3 py-4 col cursor-pointer';
            div3.style = ('background-color:' + element);
        });
        
        let a2 = document.createElement('a');
        div1.appendChild(a2);
        a2.href = 'card.html';

        let addProduct= document.createElement('button');
        a2.appendChild(addProduct);
        addProduct.className = 'w-100 text-center rounded mt-1'
        addProduct.id = 'addProduct';

        let teddyPrice= document.createElement('span');
        addProduct.appendChild(teddyPrice);
        teddyPrice.id = 'teddyPrice';
        teddyPrice.textContent = ('Ajouter au panier pour ' + data.price/100 + '€');

    })


    





