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

//card//

fetch('http://localhost:3000/api/teddies')
    .then(response => response.json())
    .then(function(data) {

        let div1 = document.createElement('div');
        container.appendChild(div1);
        div1.className = 'row p-2 mx-lg-auto';

        let order = document.createElement('section');
        div1.appendChild(order);
        order.className = 'col-12 col-lg-5 bg-oniPink rounded mt-2 p-5';

        let titleOrder = document.createElement('h5');
        order.appendChild(titleOrder);
        titleOrder.className = '';
        titleOrder.textContent = 'Votre Panier';

        let detailOrder = document.createElement('table');
        order.appendChild(detailOrder);
        detailOrder.textContent = 'Aucun produit';

        let information = document.createElement('section');
        div1.appendChild(information);
        information.className = 'col-12 col-lg-6 bg-oniPink rounded mt-2 ml-lg-5 p-5';

        let titleInformation = document.createElement('h5');
        information.appendChild(titleInformation);
        titleInformation.textContent = 'Vos coordonnées pour la commande';

        let labelPrenomInformation = document.createElement('h6');
        information.appendChild(labelPrenomInformation);
        labelPrenomInformation.textContent = 'Prénom';

        let prenomInformation = document.createElement('input');
        information.appendChild(prenomInformation);
        prenomInformation.type = 'text';
        prenomInformation.name = 'firstname';
        prenomInformation.id = 'firstname';
        prenomInformation.className = 'input';
        prenomInformation.required = 'required';

        let labelNomInformation = document.createElement('h6');
        information.appendChild(labelNomInformation);
        labelNomInformation.textContent = 'Nom ';

        let nomInformation = document.createElement('input');
        information.appendChild(nomInformation);
        nomInformation.type = 'text';
        nomInformation.name = 'lastname';
        nomInformation.id = 'lastname';
        nomInformation.className = 'input';
        nomInformation.required = 'required';

        let labelEmailInformation = document.createElement('h6');
        information.appendChild(labelEmailInformation);
        labelEmailInformation.textContent = 'email';

        let emailInformation = document.createElement('input');
        information.appendChild(emailInformation);
        emailInformation.type = 'email';
        emailInformation.name = 'email';
        emailInformation.id = 'email';
        emailInformation.className = 'input';
        emailInformation.required = 'required';

        let labelAdressInformation = document.createElement('h6');
        information.appendChild(labelAdressInformation);
        labelAdressInformation.textContent = 'Adresse ';

        let adressInformation = document.createElement('input');
        information.appendChild(adressInformation);
        adressInformation.type = 'text';
        adressInformation.name = 'adress';
        adressInformation.id = 'adress';
        adressInformation.className = 'input';
        adressInformation.required = 'required';

        let labelZipCodeInformation = document.createElement('h6');
        information.appendChild(labelZipCodeInformation);
        labelZipCodeInformation.textContent = 'Code Postal ';

        let zipCodeInformation = document.createElement('input');
        information.appendChild(zipCodeInformation);
        zipCodeInformation.type = 'text';
        zipCodeInformation.name = 'zipcode';
        zipCodeInformation.id = 'zipcode';
        zipCodeInformation.className = 'input';
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
        townInformation.className = 'input';
        townInformation.required = 'required';
    
    })

        

    