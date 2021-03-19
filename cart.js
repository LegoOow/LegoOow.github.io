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
    a1.textContent = "Panier (" + `${panier.length}` + ")";
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
                priceTeddyCart.className = 'px-4';
                product.appendChild(priceTeddyCart);
                priceTeddyCart.textContent = (element.price/100)*element.quantity + '€';
                    
                //Quantité//

                let more = document.createElement('td');
                more.className = '';
                more.id = 'moreQuantity';
                product.appendChild(more);

                let quantityTeddyCart = document.createElement('td');
                quantityTeddyCart.className = '';
                quantityTeddyCart.name = 'quantity';
                quantityTeddyCart.textContent = element.quantity;
                quantityTeddyCart.id = 'selectQuantity';
                product.appendChild(quantityTeddyCart);

                let less = document.createElement('td');
                less.className = '';
                less.id = 'lessQuantity';
                product.appendChild(less);

                function optionQuantityMore() {
                    let optionQuantityMore = document.createElement('button');
                    optionQuantityMore.textContent = "+";
                    optionQuantityMore.className= 'rounded'
                    optionQuantityMore.id = 'quantityMore'
                    more.appendChild(optionQuantityMore);
                    optionQuantityMore.addEventListener('click', function(e) {
                        e.preventDefault();
                        let addCart = panier.map( product => {
                            if(product.id === element.id) {
                                return {...product, quantity: product.quantity + 1}
                            } else {
                                return product
                                }
                        })
                            localStorage.setItem('monPanier', JSON.stringify(addCart));
                            document.location.reload()
                    })

                }

                

                function optionQuantityLess() {
                    let optionQuantityLess = document.createElement('button');
                    optionQuantityLess.textContent = "-";
                    optionQuantityLess.className= 'rounded';
                    less.appendChild(optionQuantityLess);
                    if(element.quantity >= 1)
                    optionQuantityLess.addEventListener('click', function(e) {
                        e.preventDefault();
                        let lessCart = panier.map( product => {
                            if(product.id === element.id) {
                                return {...product, quantity: product.quantity - 1}
                            } else {
                                return product
                                }
                        })
                            localStorage.setItem('monPanier', JSON.stringify(lessCart));
                            document.location.reload()
                    })
                }

                if(element.quantity == 0) {
                    let deleteTeddy = panier.filter(product => product.id !== element.id)                              
                        localStorage.setItem('monPanier', JSON.stringify(deleteTeddy));
                        document.location.reload()
                } else {
                        optionQuantityMore()
                        optionQuantityLess()
                    }

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
        let information = document.createElement('form');
        div1.appendChild(information);
        information.id = 'formulaire';
        information.className = 'col-12 col-lg-6 bg-oniPink rounded mt-2 ml-lg-5 p-5';

        let titleInformation = document.createElement('h5');
        information.appendChild(titleInformation);
        titleInformation.className = 'text-center';
        titleInformation.textContent = 'Vos coordonnées pour la commande';
        
            //Prenom//
            let groupPrenomInformation= document.createElement('div');
            groupPrenomInformation.className = 'form-group';
            information.appendChild(groupPrenomInformation);

            let labelPrenomInformation = document.createElement('label');
            groupPrenomInformation.appendChild(labelPrenomInformation);
            labelPrenomInformation.textContent = 'Prénom';

            let prenomInformation = document.createElement('input');
            groupPrenomInformation.appendChild(prenomInformation);
            prenomInformation.type = 'text';
            prenomInformation.name = 'firstname';
            prenomInformation.id = 'firstname';
            prenomInformation.className = 'input rounded';
            prenomInformation.pattern = "/^[a-zA-Z ,.'-]+$/";
            prenomInformation.required = 'required';

            //Nom//
            let groupNomInformation= document.createElement('div');
            groupNomInformation.className = 'form-group';
            information.appendChild(groupNomInformation);

            let labelNomInformation = document.createElement('label');
            groupNomInformation.appendChild(labelNomInformation);
            labelNomInformation.textContent = 'Nom ';

            let nomInformation = document.createElement('input');
            groupNomInformation.appendChild(nomInformation);
            nomInformation.type = 'text';
            nomInformation.name = 'lastname';
            nomInformation.id = 'lastname';
            nomInformation.className = 'input rounded';
            nomInformation.pattern = "/^[a-zA-Z ,.'-]+$/";
            nomInformation.required = 'required';

            //email//
            let groupEmailInformation= document.createElement('div');
            groupEmailInformation.className = 'form-group';
            information.appendChild(groupEmailInformation);

            let labelEmailInformation = document.createElement('label');
            groupEmailInformation.appendChild(labelEmailInformation);
            labelEmailInformation.textContent = 'email';

            let emailInformation = document.createElement('input');
            groupEmailInformation.appendChild(emailInformation);
            emailInformation.type = 'email';
            emailInformation.name = 'email';
            emailInformation.id = 'email';
            emailInformation.pattern = "/[\w\.]+[\w]@[\w]+\.[\w]/";
            emailInformation.className = 'input rounded';
            emailInformation.required = 'required';

            //Adresse//
            let groupAdressInformation= document.createElement('div');
            groupAdressInformation.className = 'form-group';
            information.appendChild(groupAdressInformation);

            let labelAdressInformation = document.createElement('label');
            groupAdressInformation.appendChild(labelAdressInformation);
            labelAdressInformation.textContent = 'Adresse ';

            let addressInformation = document.createElement('input');
            groupAdressInformation.appendChild(addressInformation);
            addressInformation.type = 'text';
            addressInformation.name = 'address';
            addressInformation.id = 'address';
            addressInformation.className = 'input rounded';
            addressInformation.pattern = "/[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/;"
            addressInformation.required = 'required';

            //Code postal//
            let groupZipcodeInformation= document.createElement('div');
            groupZipcodeInformation.className = 'form-group';
            information.appendChild(groupZipcodeInformation);
            
            let labelZipCodeInformation = document.createElement('label');
            groupZipcodeInformation.appendChild(labelZipCodeInformation);
            labelZipCodeInformation.textContent = 'Code Postal ';

            let zipCodeInformation = document.createElement('input');
            groupZipcodeInformation.appendChild(zipCodeInformation);
            zipCodeInformation.type = 'text';
            zipCodeInformation.name = 'zipcode';
            zipCodeInformation.id = 'zipcode';
            zipCodeInformation.className = 'input rounded';
            zipCodeInformation.pattern='[0-9]{5}';
            zipCodeInformation.required = 'required';

            //Ville//
            let groupCityInformation= document.createElement('div');
            groupCityInformation.className = 'form-group';
            information.appendChild(groupCityInformation);

            let labelCityInformation = document.createElement('label');
            groupCityInformation.appendChild(labelCityInformation);
            labelCityInformation.textContent = 'Ville ';

            let cityInformation = document.createElement('input');
            groupCityInformation.appendChild(cityInformation);
            cityInformation.type = 'text';
            cityInformation.name = 'city';
            cityInformation.id = 'city';
            cityInformation.className = 'input rounded';
            cityInformation.pattern = "/[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/";
            cityInformation.required = 'required';

        let validCart = document.createElement('a');
        information.appendChild(validCart);
        validCart.id = 'validcart';
        validCart.className = 'btn btn-secondary text-white mt-3';
        validCart.textContent = 'Procéder au paiement';


        //Création de l'objet pour l'envoi au serveur//
        objectOrder = {
            contact: {},
            products: [],
        };

        //Produit(s)//
        panier.forEach((idArticle) => objectOrder.products.push(idArticle.id));
        console.log(objectOrder);

        //Contact//
        function getFormCustomerOrder () {
            let firstName = document.getElementById("firstname").value;
            let lastName = document.getElementById("lastname").value;
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

        //Vérification du formulaire//
        let formulaire = document.getElementById("formulaire")
                formulaire.addEventListener("submit", function (getFormCustomerOrder) {
                    getFormCustomerOrder.preventDefault();
                });

        //Envoi des données au localstorage//
        function sendFormCustomerOrder() {
            fetch('http://localhost:3000/api/teddies/order', {
                method: 'POST',
                body: JSON.stringify(objectOrder),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    sessionStorage.setItem("orderId", JSON.stringify(data.orderId))
                    window.location.href = "confirmation.html";
                })   
             .catch(err => console.log(err)); 
        }

        //Envoi des données au click + contrôle des données//
        let validForm = document.getElementById('validcart');
        validForm.addEventListener("click", control);
        function control(event) {
                if(validation(event)) {
                    getFormCustomerOrder();
                    sendFormCustomerOrder();
                }
        }
    
        //Contrôle formulaire//
        function validation(event) {

            let firstName = document.getElementById('firstname');
            let firstNameOk = /^[a-zA-Z ,.'-]+$/;

            let lastName = document.getElementById('lastname');
            let lastNameOk = /^[a-zA-Z ,.'-]+$/;

            let address = document.getElementById('address');
            let addressOk = /[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/;

            let city = document.getElementById('city');
            let cityOk = /[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/;

            let email = document.getElementById('email');
            let emailOk = /[\w\.]+[\w]@[\w]+\.[\w]/;

            let zipCode = document.getElementById('zipcode');
            let zipCodeOk = /[0-9]{5}/;

            console.log(firstNameOk.test(firstName.value));
            console.log(lastNameOk.test(lastName.value));
            console.log(addressOk.test(address.value))
            console.log(zipCodeOk.test(zipCode.value))
            console.log(cityOk.test(city.value))
            console.log(emailOk.test(email.value))
    
            //Si le champ est vide
            if (firstName.validity.valueMissing) {
                event.preventDefault();
                firstName.className= "border-red";
                //Si le format de données est incorrect
            } else if (firstNameOk.test(firstName.value) == false) {
                event.preventDefault();
                firstName.className= "border-red";
                //Si le champ est vide
            } else if (lastName.validity.valueMissing) {
                event.preventDefault();
                lastName.className= "border-red";
                //Si le format de données est incorrect
            } else if (lastNameOk.test(lastName.value) == false) {
                event.preventDefault();
                lastName.className= "border-red";
                //Si le champ est vide
            } else if (address.validity.valueMissing) {
                event.preventDefault();
                address.className= "border-red";
                //Si le format de données est incorrect
            } else if (addressOk.test(address.value) == false) {
                event.preventDefault();
                address.className= "border-red";
                //Si le champ est vide
            } else if (zipcode.validity.valueMissing) {
                event.preventDefault();
                zipcode.className= "border-red";
                //Si le format de données est incorrect
            } else if (zipCodeOk.test(zipCode.value) == false) {
                event.preventDefault();
                zipCode.className= "border-red";
                //Si le champ est vide
            } else if (city.validity.valueMissing) {
                event.preventDefault();
                city.className= "border-red";
                //Si le format de données est incorrect
            } else if (cityOk.test(city.value) == false) {
                event.preventDefault();
                city.className= "border-red";
                //Si le champ est vide
            } else if (email.validity.valueMissing) {
                event.preventDefault();
                email.className= "border-red";
                //Si le format de données est incorrect
            } else if (emailOk.test(email.value) == false) {
                event.preventDefault();
                email.className= "border-red";
                console.log(emailOk.value)
            } else if (panier.length == 0) {
                event.preventDefault();
                alert(
                "Votre panier est vide! Pour passer commande, il vous faut au moins un article ;)"
                );
                return false;
            } else {
                // tous les else if renvoient return false
                return true;
            }
        }
}



        
    





    