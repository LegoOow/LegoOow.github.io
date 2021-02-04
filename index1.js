function recup () {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        // Récupération des données de l'API //
        var response = JSON.parse(this.responseText);
        // Affichage dans le HTML //
        var teddyName = document.getElementById('teddy1-name');
        teddyName.textContent = response[0].name;
        var teddyPrice = document.getElementById('teddy1-price');
        teddyPrice.textContent = (response[0].price + '€');
        var teddyDescription = document.getElementById('teddy1-description');
        teddyDescription.textContent = response[0].description;
        var teddyImage = document.getElementById('teddy1-img');
        teddyImage.src = response[0].imageUrl;
        }
    };
request.open("GET", "http://localhost:3000/api/teddies");
request.send();

}

recup()