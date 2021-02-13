let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

                // Product display // 
                var response = JSON.parse(this.responseText);
                
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
                teddyImg.src = response.imageUrl;

                let div1 = document.createElement('div');
                section.appendChild(div1);
                div1.className = 'mx-3 w-auto bg-oniPink';

                let teddyName = document.createElement('h4');
                div1.appendChild(teddyName);
                teddyName.className = '';
                teddyName.id = 'teddyName';
                teddyName.textContent = ('Voici le bel Ours ' + response.name);

                let teddyDescription = document.createElement('p');
                div1.appendChild(teddyDescription);
                teddyDescription.className = '';
                teddyDescription.id = 'teddyDescription';
                teddyDescription.textContent = response.description;

                let h2 = document.createElement('h4');
                div1.appendChild(h2);
                h2.className = 'text-bold font-lg font-bold mt-5';
                h2.textContent = 'Choisissez la couleur de votre ours :';

                let div2 = document.createElement('div');
                div1.appendChild(div2);
                div2.className = 'row '

                response.colors.forEach(element => {
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
                teddyPrice.textContent = ('Ajouter au panier pour ' + response.price/100 + '€');
  
        };
    }
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();