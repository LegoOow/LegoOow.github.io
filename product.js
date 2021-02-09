// Navigation //
const div0 = document.createElement('div');
div0.className = 'row';
const container = document.getElementById('container');
container.appendChild(div0);

const nav = document.createElement('nav');
nav.className = 'col navbar navbar-expand-xs';
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

function recup () {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

                // Product display // 
                var response = JSON.parse(this.responseText);
            

                let section = document.createElement('section');
                container.appendChild(section);
                section.className = 'd-flex flex-md-row flex-column';
                section.id = 'section';
                    
                let figure = document.createElement('figure');
                section.appendChild(figure);
                figure.className = 'me-5';
    
                let img = document.createElement('img');
                figure.appendChild(img);
                img.className = 'figure-img img-fluid rounded object-cover';
                img.id = 'teddy1-img';
                img.src='';

                let div1 = document.createElement('div');
                section.appendChild(div1);
                div1.className = 'mx-3 mb-3';

                let h1 = document.createElement('h4');
                div1.appendChild(h1);
                h1.className = '';
                h1.id = 'teddy1-name';

                let p = document.createElement('p');
                div1.appendChild(p);
                p.className = '';
                p.id = 'teddy1-description';

                let h2 = document.createElement('h4');
                div1.appendChild(h2);
                h2.className = 'text-bold font-lg font-bold mt-4';
                h2.textContent = 'Choisissez la couleur de votre bel ours :';

                let template = document.createElement('template');
                div1.appendChild(template);
                template.id = 'teddy1-colors';

                let div2 = document.createElement('div');
                section.appendChild(div2);
                div2.className = 'h-12 sm:h-20 cursor-pointer flex-grow bg-white rounded';
                div2.style = ('background-color:' + response[0].colors[0]);

                let button = document.createElement('button');
                div1.appendChild(button);
                button.className = 'w-100 text-center rounded'
                button.id = 'addProduct';

                let span = document.createElement('span');
                button.appendChild(span);
                span.id = 'teddy1-price';
                span.classList = '';

                console.log('element: ', response[0]);
                var teddyName = document.getElementById('teddy1-name');
                teddyName.textContent = ('Voici le bel Ours ' + response[0].name);
                var teddyPrice = document.getElementById('teddy1-price');
                teddyPrice.textContent = ('Ajouter au panier pour ' + response[0].price/100 + '€');
                var teddyDescription = document.getElementById('teddy1-description');
                teddyDescription.textContent = response[0].description;
                var teddyImage = document.getElementById('teddy1-img');
                teddyImage.src = response[0].imageUrl;
                
        };
    }
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();
}


recup()

