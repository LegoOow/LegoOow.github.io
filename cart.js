//Variables//

let panier = JSON.parse(localStorage.getItem('monPanier'));

//Function//

nav();
displayCart();

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

function displayCart() {
    
    //panier//
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
            

    if (panier.length === 0) {
        let noProduct = document.createElement('tr');
        order.appendChild(noProduct);
        noProduct.textContent = 'Aucun produit';

    } else {
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
                priceTeddyCart.textContent = (element.price/100)*element.quantity + '€';
                    
                //Quantité//

                let quantityTeddyCart = document.createElement('select');
                quantityTeddyCart.className = 'ml-3';
                quantityTeddyCart.name = 'quantity';
                quantityTeddyCart.id = 'selectQuantity';
                product.appendChild(quantityTeddyCart);

                function optionQuantity() {
                    let j = 0;
                    while (j <=8 ) {
                        j++;
                        let optionQuantity = document.createElement('option');
                        optionQuantity.textContent = element.quantity;
                        optionQuantity.value = j;
                        quantityTeddyCart.appendChild(optionQuantity);
                    }
                }

                optionQuantity();

                //Suppression//
                let deleteTeddyCart = document.createElement('button');
                deleteTeddyCart.className = 'btn btn-secondary ml-3 mt-1';
                deleteTeddyCart.id = element.id;
                deleteTeddyCart.textContent = 'X';
                product.appendChild(deleteTeddyCart);

                function deleteProduct(){
                    let deleteButton = document.getElementById(element.id);
                    deleteButton.addEventListener('click', function(e){
                        e.preventDefault();
                        let deleteTeddy = panier.filter(product => product.id !== element.id)                              
                        localStorage.setItem('monPanier', JSON.stringify(deleteTeddy));
                        document.location.reload()
                    }) 
                }

                deleteProduct()       
                                
            });
        }
        
        //Prix Total//

        function totalOrder() {
            let totalPrice = document.createElement('div');
            order.appendChild(totalPrice);
            totalPrice.className = '';

            let titleTotalPrice = document.createElement('h5');
            totalPrice.appendChild(titleTotalPrice);
            titleTotalPrice.textContent = 'Prix Total';
            let totalPriceOrder = 0;

            panier.forEach(product => {    
                totalPriceOrder += (product.price/100)*product.quantity;
            })

            let displayTotalPrice = document.createElement('p');
            titleTotalPrice.appendChild(displayTotalPrice);
            displayTotalPrice.textContent = totalPriceOrder + '€';
        }

        totalOrder();

        //Information//
        let information = document.createElement('section');
        div1.appendChild(information);
        information.id = 'formulaire';
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
        zipCodeInformation.pattern='[0-9]{5}';
        zipCodeInformation.required = 'required';

        let labelTownInformation = document.createElement('h6');
        information.appendChild(labelTownInformation);
        labelTownInformation.textContent = 'Ville ';

        let townInformation = document.createElement('input');
        information.appendChild(townInformation);
        townInformation.type = 'text';
        townInformation.name = 'city';
        townInformation.id = 'city';
        townInformation.className = 'input rounded';
        townInformation.required = 'required';

        let validCart = document.createElement('a');
        information.appendChild(validCart);
        validCart.className = 'btn btn-secondary text-white mt-3';
        validCart.textContent = 'Procéder au paiement';
        validCart.href = 'confirmation.html';

        //Création de l'objet pour l'envoi au serveur//
        objectOrder = {
            contact: {},
            products: [],
        };

        //Produit(s)//
        panier.forEach((idArticle) => objectOrder.products.push(idArticle.id));

        //Contact//
        function getFormCustomerOrder () {
            let firstName = document.getElementById("firstName").value;
            let lastName = document.getElementById("lastName").value;
            let email = document.getElementById("email").value;
            let address = document.getElementById("address").value;
            let zipCode = document.getElementById("zipcode").value;
            let city = document.getElementById("city").value;

            objectOrder.contact = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                address: address,
                zipCode: zipCode,
                city: city,
            };
            contact = objectOrder.contact;
            products = objectOrder.products;
            console.log(products);
            console.log(objectOrder);
            console.log(contact);
            localStorage.setItem("contact", JSON.stringify(contact));
            localStorage.setItem("objectOrder", JSON.stringify(objectOrder));
        }
        //Envoi des données au localstorage//
        function sendFormCustomerOrder() {
            fetch('http://localhost:3000/api/cameras/order', {
                method: 'POST',
                body: JSON.stringify(objectOrder),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
                .then(response => {
                    if (response.status == 201) {
                        window.location.href = 'confirmation.html';
                        let confirmation = JSON.parse(this.responseText);
                        sessionStorage.setItem('order', JSON.stringify(confirmation));
                    }
                })
             .catch(err => console.log(err)); 
        }
}



        
    





    