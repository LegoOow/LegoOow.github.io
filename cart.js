//Function//

nav();

//Variables//

let panier = JSON.parse(localStorage.getItem('monPanier'));

// Navigation //
function nav() {
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
}

        //card//


        let div1 = document.createElement('div');
        container.appendChild(div1);
        div1.className = 'row mx-auto';

        let order = document.createElement('section');
        div1.appendChild(order);
        order.className = 'col-12 col-lg-5 bg-oniPink rounded mr-lg-4 mt-2 p-5';

        let titleOrder = document.createElement('h5');
        order.appendChild(titleOrder);
        titleOrder.className = '';
        titleOrder.textContent = 'Votre Panier';

        function displayCart() {
            let panier = JSON.parse(localStorage.getItem('monPanier'));
            console.log(JSON.parse(localStorage.getItem('monPanier')));
            
            //Panier(tableau)//

            let addTeddyCart = document.createElement('table');
            addTeddyCart.id = 'productCart';
            order.appendChild(addTeddyCart);

            let titleCard = document.createElement('thead');
            addTeddyCart.appendChild(titleCard);

            let titleProductCard = document.createElement('th');
            titleCard.appendChild(titleProductCard);
            titleProductCard.textContent = 'Produit';

            let titlePriceCard = document.createElement('th');
            titleCard.appendChild(titlePriceCard);
            titlePriceCard.textContent = 'Prix';
            titlePriceCard.className = 'pl-2';

            let titleQuantityCard = document.createElement('th');
            titleCard.appendChild(titleQuantityCard);
            titleQuantityCard.textContent = 'Quantité';
            titleQuantityCard.className = 'pl-2';

            let bodyCart = document.createElement('tbody');
            bodyCart.id = 'productList';
            addTeddyCart.appendChild(bodyCart);
            

            if (panier === null) {
                let noProduct = document.createElement('tr');
                addTeddyCart.appendChild(noProduct);
                noProduct.textContent = 'Aucun produit';
            } 
            
            else {

                panier.forEach(element => {
                    
                    //Produit//
                    let product = document.createElement('tr');
                    bodyCart.appendChild(product);

                    //Nom//
                    let nameTeddyCart = document.createElement('td');
                    nameTeddyCart.className = 'text-center';
                    product.appendChild(nameTeddyCart);
                    nameTeddyCart.textContent = element.name;

                    //Prix//
                    let priceTeddyCart = document.createElement('td');
                    priceTeddyCart.className = 'pl-3';
                    product.appendChild(priceTeddyCart);
                    priceTeddyCart.textContent = element.price/100 + '€';
                    
                    //Quantité//
                    let quantityTeddyCart = document.createElement('select');
                    quantityTeddyCart.className = 'ml-3';
                    quantityTeddyCart.name = 'quantity';
                    quantityTeddyCart.id = 'selectQuantity';
                    quantityTeddyCart.textContent = element.quantity;
                    product.appendChild(quantityTeddyCart);

                    let quantityOption1 = document.createElement('option');
                    quantityOption1.value = '1';
                    quantityOption1.textContent = '1';
                    quantityTeddyCart.appendChild(quantityOption1);

                    let quantityOption2 = document.createElement('option');
                    quantityOption2.value = '2';
                    quantityOption2.textContent = '2';
                    quantityTeddyCart.appendChild(quantityOption2);
                    
                    let quantityOption3 = document.createElement('option');
                    quantityOption3.value = '3';
                    quantityOption3.textContent = '3';
                    quantityTeddyCart.appendChild(quantityOption3);
                    
                    let quantityOption4 = document.createElement('option');
                    quantityOption4.value = '4';
                    quantityOption4.textContent = '4';
                    quantityTeddyCart.appendChild(quantityOption4);

                    //Suppression//
                    let deleteTeddyCart = document.createElement('button');
                    deleteTeddyCart.className = 'btn btn-secondary ml-3 mt-1';
                    deleteTeddyCart.id = 'deleteTeddyCard';
                    deleteTeddyCart.textContent = 'X';
                    product.appendChild(deleteTeddyCart);
                    
                });
            }
        }

        displayCart();
        localStorage.clear(panier);


        let information = document.createElement('section');
        div1.appendChild(information);
        information.className = 'col-12 col-lg-6 bg-oniPink rounded mt-2 ml-lg-5 p-5';

        let titleInformation = document.createElement('h5');
        information.appendChild(titleInformation);
        titleInformation.classList = 'text-center';
        titleInformation.textContent = 'Vos coordonnées pour la commande';

        let labelPrenomInformation = document.createElement('h6');
        information.appendChild(labelPrenomInformation);
        labelPrenomInformation.textContent = 'Prénom';

        let prenomInformation = document.createElement('input');
        information.appendChild(prenomInformation);
        prenomInformation.type = 'text';
        prenomInformation.name = 'firstname';
        prenomInformation.id = 'firstname';
        prenomInformation.className = 'input rounded';
        prenomInformation.required = 'required';

        let labelNomInformation = document.createElement('h6');
        information.appendChild(labelNomInformation);
        labelNomInformation.textContent = 'Nom ';

        let nomInformation = document.createElement('input');
        information.appendChild(nomInformation);
        nomInformation.type = 'text';
        nomInformation.name = 'lastname';
        nomInformation.id = 'lastname';
        nomInformation.className = 'input rounded';
        nomInformation.required = 'required';

        let labelEmailInformation = document.createElement('h6');
        information.appendChild(labelEmailInformation);
        labelEmailInformation.textContent = 'email';

        let emailInformation = document.createElement('input');
        information.appendChild(emailInformation);
        emailInformation.type = 'email';
        emailInformation.name = 'email';
        emailInformation.id = 'email';
        emailInformation.className = 'input rounded';
        emailInformation.required = 'required';

        let labelAdressInformation = document.createElement('h6');
        information.appendChild(labelAdressInformation);
        labelAdressInformation.textContent = 'Adresse ';

        let adressInformation = document.createElement('input');
        information.appendChild(adressInformation);
        adressInformation.type = 'text';
        adressInformation.name = 'adress';
        adressInformation.id = 'adress';
        adressInformation.className = 'input rounded';
        adressInformation.required = 'required';

        let labelZipCodeInformation = document.createElement('h6');
        information.appendChild(labelZipCodeInformation);
        labelZipCodeInformation.textContent = 'Code Postal ';

        let zipCodeInformation = document.createElement('input');
        information.appendChild(zipCodeInformation);
        zipCodeInformation.type = 'text';
        zipCodeInformation.name = 'zipcode';
        zipCodeInformation.id = 'zipcode';
        zipCodeInformation.className = 'input rounded';
        zipCodeInformation.pattern='[0-9]';
        zipCodeInformation.required = 'required';

        let labelTownInformation = document.createElement('h6');
        information.appendChild(labelTownInformation);
        labelTownInformation.textContent = 'Ville ';

        let townInformation = document.createElement('input');
        information.appendChild(townInformation);
        townInformation.type = 'text';
        townInformation.name = 'town';
        townInformation.id = 'town';
        townInformation.className = 'input rounded';
        townInformation.required = 'required';





    