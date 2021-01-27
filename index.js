function name() {

    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText);
            let nameResult = document.getElementById('teddies-name');
            nameResult.innertHTML = response.0.name;
            }
        };
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();
  };
  
  let element = document.getElementById('ask-weather');
  
  element.addEventListener('click', function(event) {
          event.stopPropagation();
          askWeather();
  });





