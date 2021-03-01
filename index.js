//Fonction//

nav();

// Navigation //
function nav() {

    const div0 = document.createElement('div');
    const container = document.getElementById('container');
    const nav = document.createElement('nav');
    const a0 = document.createElement('a');
    const a1 = document.createElement('a')
    const img0 = document.createElement('img');
    
    div0.className = 'row';
    nav.className = 'col navbar navbar-expand-xs bg-oniPink rounded m-3';
    a0.className = 'navbar-brand';
    a0.href = 'index.html';
    a1.className = 'nav-link text-black';
    a1.href = 'cart.html';
    a1.textContent = 'Panier';
    img0.className = 'bg-oniPink';
    img0.src = 'images/logo.png';
    img0.alt = 'Logo Orinoco';
    img0.width = '200';

    container.appendChild(div0);
    div0.appendChild(nav);
    nav.appendChild(a0);
    nav.appendChild(a1);
    a0.appendChild(img0);
}   

let ul = document.createElement('ul');
container.appendChild(ul);
ul.className = 'row mt-3 list-unstyled';

    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

            // Product display // 
            var response = JSON.parse(this.responseText);
            response.forEach(element => {

                let li = document.createElement('li');
                ul.appendChild(li);
                li.className = 'col-12 col-lg-4'

                let link = document.createElement('a');
                li.appendChild(link);
                link.id = 'teddyLink';
                link.classList = 'stretched-link';
                link.href = 'product.html?id=' + element._id;
                    
                let figure = document.createElement('figure');
                li.appendChild(figure);
                figure.className = 'card mb-3 shadow';
    
                let teddyImg = document.createElement('img');
                figure.appendChild(teddyImg);
                teddyImg.className = 'card-img-top';
                teddyImg.id = 'teddyImg';
                teddyImg.src = element.imageUrl;
    
                let teddyInfo = document.createElement('figcaption');
                figure.appendChild(teddyInfo);
                teddyInfo.className = 'card-body';
                teddyInfo.id = 'teddyInfo';
    
                let teddyName = document.createElement('h5');
                teddyInfo.appendChild(teddyName);
                teddyName.className = 'card-title text-center';
                teddyName.id = 'teddyName';
                teddyName.textContent = element.name;
    
                let teddyPrice = document.createElement('p');
                teddyInfo.appendChild(teddyPrice);
                teddyPrice.id = 'teddyPrice';
                teddyPrice.classList = 'card-text text-center';
                teddyPrice.textContent = (element.price/100 + '€');
    
                let teddyDescription = document.createElement('span');
                figure.appendChild(teddyDescription);
                teddyDescription.classList = 'mx-3 my-3';
                teddyDescription.id = 'teddyDescription';
                teddyDescription.textContent = element.description;
  
            });
        };
    }
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();





