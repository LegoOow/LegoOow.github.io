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

const div1 = document.createElement('div');
div1.className = 'row mt-3';
container.appendChild(div1);


    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

            // Product display // 
            var response = JSON.parse(this.responseText);
            response.forEach(element => {

                let ul = document.createElement('ul');
                div1.appendChild(ul);
                ul.className = 'col-12 col-lg-4 list-unstyled';

                let li = document.createElement('li');
                ul.appendChild(li);
                    
                let figure = document.createElement('figure');
                li.appendChild(figure);
                figure.className = 'card mb-3 shadow';
    
                let img = document.createElement('img');
                figure.appendChild(img);
                img.className = 'card-img-top';
                img.id = 'teddy1-img';
                img.src='';
    
                let figcaption = document.createElement('figcaption');
                figure.appendChild(figcaption);
                figcaption.className = 'card-body';
                figcaption.id = 'teddy1-info';
    
                let h5 = document.createElement('h5');
                figcaption.appendChild(h5);
                h5.className = 'card-title';
                h5.id = 'teddy1-name';
    
                let p0 = document.createElement('p');
                figcaption.appendChild(p0);
                p0.id = 'teddy1-price';
                p0.classList = 'card-text text-right';
    
                let span = document.createElement('span');
                figcaption.appendChild(span);
                span.classList = 'card-text';
                span.id = 'teddy1-description';

                console.log('element: ', element);
                var teddyName = document.getElementById('teddy1-name');
                teddyName.textContent = element.name;
                var teddyPrice = document.getElementById('teddy1-price');
                teddyPrice.textContent = (element.price/100 + '€');
                var teddyDescription = document.getElementById('teddy1-description');
                teddyDescription.textContent = element.description;
                var teddyImage = document.getElementById('teddy1-img');
                teddyImage.src = element.imageUrl;
                
                
            });
        };
    }
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();





