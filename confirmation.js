//Variables//

let panier = JSON.parse(localStorage.getItem('monPanier'));
console.log(panier);

//Function//

nav();
confirmation();
clearCart();

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


function confirmation() {
    
    //DOM//
    let div1 = document.createElement('div');
    let mainOrder = document.createElement('main');
    let pOrder = document.createElement('p');
    let nOrder = document.createElement('p');
    let totalPriceOrder = document.createElement('p');
    let buttonReturnIndex = document.createElement('a');
    let totalPrice = 0;

    panier.forEach(product => {    
        totalPrice += (product.price/100)*product.quantity;
    })

    div1.className = 'row mx-auto';
    mainOrder.className = 'w-full bg-oniPink rounded my-1 p-5 col-12 text-center ';
    pOrder.textContent = 'Félécitation, votre commande à bien été pris en compte !';
    pOrder.className = 'fs-1';
    nOrder.className = 'fs-4';
    nOrder.textContent = 'Commande N°' + '###';
    totalPriceOrder.className = 'fs-4';
    totalPriceOrder.textContent = 'Total de la commande :' + totalPrice + '€';
    buttonReturnIndex.id = 'btnClear'
    buttonReturnIndex.textContent = 'Retour à la page principale'
    buttonReturnIndex.className = 'btn btn-secondary text-white';
    buttonReturnIndex.href = 'index.html';

    container.appendChild(div1);
    div1.appendChild(mainOrder);
    mainOrder.appendChild(pOrder);
    mainOrder.appendChild(nOrder);
    mainOrder.appendChild(totalPriceOrder);
    mainOrder.appendChild(buttonReturnIndex);
}




function clearCart() {
    let btnClear = document.getElementById('btnClear');
            btnClear.addEventListener('click', function(e){ 
                e.preventDefault();  
                localStorage.clear();
                document.location.reload()
            }) 
}

