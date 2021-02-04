// HTML //
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

    // Product //
        // Product 1 //
        const div1 = document.createElement('div');
        div1.className = 'row mt-3';
        container.appendChild(div1);

        const div2 = document.createElement('div');
        div2.className = 'col-12 col-lg-4';
        div1.appendChild(div2);

        const div3 = document.createElement('div');
        div3.className = 'card mb-3 shadow';
        div2.appendChild(div3);

        const img1 = document.createElement('img');
        img1.id = 'teddy1-img';
        img1.className = 'card-img-top';
        img1.src = '';
        div3.appendChild(img1);

        const div4 = document.createElement('div');
        div4.id = 'teddy1-info';
        div4.className = 'card-body';
        div3.appendChild(div4);

        const h0 = document.createElement('h5');
        h0.className = 'card-title';
        div4.appendChild(h0);

        const div5 = document.createElement('div');
        div5.id = 'teddy1-name';
        h0.appendChild(div5);

        const p0 = document.createElement('p');
        p0.id = 'teddy1-price';
        p0.className = 'card-text';
        h0.appendChild(p0);

        const p1 = document.createElement('p');
        p1.id = 'teddy1-description';
        p1.className = 'card-text';
        div4.appendChild(p1);

        // Product 2 //

        const div7 = document.createElement('div');
        div7.className = 'col-12 col-lg-4';
        div1.appendChild(div7);

        const div8 = document.createElement('div');
        div8.className = 'card mb-3 shadow';
        div7.appendChild(div8);

        const img2 = document.createElement('img');
        img2.id = 'teddy2-img';
        img2.className = 'card-img-top';
        img2.src = '';
        div8.appendChild(img2);

        const div9 = document.createElement('div');
        div9.id = 'teddy2-info';
        div9.className = 'card-body';
        div8.appendChild(div9);

        const h1 = document.createElement('h5');
        h1.className = 'card-title';
        div9.appendChild(h1);

        const div10 = document.createElement('div');
        div10.id = 'teddy2-name';
        h1.appendChild(div10);

        const p2 = document.createElement('p');
        p2.id = 'teddy2-price';
        p2.className = 'card-text';
        h1.appendChild(p2);

        const p3 = document.createElement('p');
        p3.id = 'teddy2-description';
        p3.className = 'card-text';
        div9.appendChild(p3);

        // Product 3 //

        const div12 = document.createElement('div');
        div12.className = 'col-12 col-lg-4';
        div1.appendChild(div12);

        const div13 = document.createElement('div');
        div13.className = 'card mb-3 shadow';
        div12.appendChild(div13);

        const img3 = document.createElement('img');
        img3.id = 'teddy3-img';
        img3.className = 'card-img-top';
        img3.src = '';
        div13.appendChild(img3);

        const div14 = document.createElement('div');
        div14.id = 'teddy3-info';
        div14.className = 'card-body';
        div13.appendChild(div14);

        const h2 = document.createElement('h5');
        h2.className = 'card-title';
        div14.appendChild(h2);

        const div15 = document.createElement('div');
        div15.id = 'teddy3-name';
        h2.appendChild(div15);

        const p4 = document.createElement('p');
        p4.id = 'teddy3-price';
        p4.className = 'card-text';
        h2.appendChild(p4);

        const p5 = document.createElement('p');
        p5.id = 'teddy3-description';
        p5.className = 'card-text';
        div14.appendChild(p5);

        // Product 4 //

        const div17 = document.createElement('div');
        div17.className = 'col-12 col-lg-4';
        div1.appendChild(div17);

        const div18 = document.createElement('div');
        div18.className = 'card mb-3 shadow';
        div17.appendChild(div18);

        const img4 = document.createElement('img');
        img4.id = 'teddy4-img';
        img4.className = 'card-img-top';
        img4.src = '';
        div18.appendChild(img4);

        const div19 = document.createElement('div');
        div19.id = 'teddy4-info';
        div19.className = 'card-body';
        div18.appendChild(div19);

        const h3 = document.createElement('h5');
        h3.className = 'card-title';
        div19.appendChild(h3);

        const div20 = document.createElement('div');
        div20.id = 'teddy4-name';
        h3.appendChild(div20);

        const p6 = document.createElement('p');
        p6.id = 'teddy4-price';
        p6.className = 'card-text';
        h3.appendChild(p6);

        const p7 = document.createElement('p');
        p7.id = 'teddy4-description';
        p7.className = 'card-text';
        div19.appendChild(p7);

        // Product 5 //
        const div22 = document.createElement('div');
        div22.className = 'col-12 col-lg-4';
        div1.appendChild(div22);

        const div23 = document.createElement('div');
        div23.className = 'card mb-3 shadow';
        div22.appendChild(div23);

        const img5 = document.createElement('img');
        img5.id = 'teddy5-img';
        img5.className = 'card-img-top';
        img5.src = '';
        div23.appendChild(img5);

        const div24 = document.createElement('div');
        div24.id = 'teddy5-info';
        div24.className = 'card-body';
        div23.appendChild(div24);

        const h4 = document.createElement('h5');
        h4.className = 'card-title';
        div24.appendChild(h4);

        const div25 = document.createElement('div');
        div25.id = 'teddy5-name';
        h4.appendChild(div25);

        const p8 = document.createElement('p');
        p8.id = 'teddy5-price';
        p8.className = 'card-text';
        h4.appendChild(p8);

        const p9 = document.createElement('p');
        p9.id = 'teddy5-description';
        p9.className = 'card-text';
        div24.appendChild(p9);



function recup () {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        // Data recovery API  //
        var response = JSON.parse(this.responseText);

        // Display in product HTML 1  //
        var teddyName = document.getElementById('teddy1-name');
        teddyName.textContent = response[0].name;
        var teddyPrice = document.getElementById('teddy1-price');
        teddyPrice.textContent = (response[0].price + '€');
        var teddyDescription = document.getElementById('teddy1-description');
        teddyDescription.textContent = response[0].description;
        var teddyImage = document.getElementById('teddy1-img');
        teddyImage.src = response[0].imageUrl;
        
        // Display in product HTML 2  //
        var teddyName = document.getElementById('teddy2-name');
        teddyName.textContent = response[1].name;
        var teddyPrice = document.getElementById('teddy2-price');
        teddyPrice.textContent = (response[1].price + '€');
        var teddyDescription = document.getElementById('teddy2-description');
        teddyDescription.textContent = response[1].description;
        var teddyImage = document.getElementById('teddy2-img');
        teddyImage.src = response[1].imageUrl;

        // Display in product HTML 3  //
        var teddyName = document.getElementById('teddy3-name');
        teddyName.textContent = response[2].name;
        var teddyPrice = document.getElementById('teddy3-price');
        teddyPrice.textContent = (response[2].price + '€');
        var teddyDescription = document.getElementById('teddy3-description');
        teddyDescription.textContent = response[2].description;
        var teddyImage = document.getElementById('teddy3-img');
        teddyImage.src = response[2].imageUrl;

        // Display in product HTML 4  //
        var teddyName = document.getElementById('teddy4-name');
        teddyName.textContent = response[3].name;
        var teddyPrice = document.getElementById('teddy4-price');
        teddyPrice.textContent = (response[3].price + '€');
        var teddyDescription = document.getElementById('teddy4-description');
        teddyDescription.textContent = response[3].description;
        var teddyImage = document.getElementById('teddy4-img');
        teddyImage.src = response[3].imageUrl;

        // Display in product HTML 5  //
        var teddyName = document.getElementById('teddy5-name');
        teddyName.textContent = response[4].name;
        var teddyPrice = document.getElementById('teddy5-price');
        teddyPrice.textContent = (response[4].price + '€');
        var teddyDescription = document.getElementById('teddy5-description');
        teddyDescription.textContent = response[4].description;
        var teddyImage = document.getElementById('teddy5-img');
        teddyImage.src = response[4].imageUrl;
        }
    };
request.open("GET", "http://localhost:3000/api/teddies");
request.send();

}

recup()

