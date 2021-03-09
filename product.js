//Fonction//

nav();

// Panier //
if (localStorage.getItem('monPanier')){
    console.log('panier OK')
}
else {
    console.log('création panier')
    let init = []
    localStorage.setItem('monPanier', (JSON.stringify(init)))
};
let panier = JSON.parse(localStorage.getItem('monPanier'));


const params = new URLSearchParams(document.location.search);
const id = params.get('id');

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

//Produit//

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

        let addProduct= document.createElement('button');
        a2.appendChild(addProduct);
        addProduct.className = 'w-100 text-center rounded mt-1';
        addProduct.id = 'btnAddProduct';

        let teddyPrice= document.createElement('span');
        addProduct.appendChild(teddyPrice);
        teddyPrice.id = 'teddyPrice';
        teddyPrice.textContent = ('Ajouter au panier pour ' + data.price/100 + '€');

        function addCart(){
            let button = document.getElementById('btnAddProduct');
            button.addEventListener('click', function(e){ 
                e.preventDefault();
                let firstProduct = {id: data._id, name: data.name, price: data.price, quantity: 1}
                let productAlreadyAdded = false;
                let addCart = panier.map( product => {
                    if(product.id === data._id) {
                        productAlreadyAdded = true;
                        alert('Vous avez ajouté de nouveau ' + data.name + ' au panier');
                        return {...product, quantity: product.quantity + 1}
                    } else {
                        return product
                        }
                })
                //Premier produit//
                if (panier.length === 0) {
                    panier.push(firstProduct);
                    localStorage.setItem('monPanier', JSON.stringify(panier));
                    document.location.reload()
                //Ajout produit//
                } else {  
                        localStorage.setItem('monPanier', JSON.stringify(addCart));
                        document.location.reload()
                    }
                    if (!productAlreadyAdded) {
                        addCart.push(firstProduct);
                        localStorage.setItem('monPanier', JSON.stringify(addCart));
                        alert('Vous avez ajouté ' + data.name + ' au panier');
                        document.location.reload()
                    }
            }) 
        }
        addCart();
    })
    

      

console.log(JSON.parse(localStorage.getItem('monPanier')));
    





