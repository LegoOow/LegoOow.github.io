let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);
        let nameResult = document.getElementById('teddy1-name');
        nameResult.innertHTML = response.monTableau[0].name;
        }
    };
request.open("GET", "http://localhost:3000/api/teddies");
request.send();
    
