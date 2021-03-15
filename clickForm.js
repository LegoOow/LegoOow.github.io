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

        let zipcode = document.getElementById('zipcode');
        let zipCodeOk = /[0-9]{5}/;

        console.log(firstNameOk.test(firstName.value));
        //Si le champ est vide
        if (firstName.validity.valueMissing) {
            event.preventDefault();
            firstName.textContent = "Prénom manquant";
            firstName.style.color = "red";
            //Si le format de données est incorrect
        } else if (firstNameOk.test(firstName.value) == false) {
            event.preventDefault();
            firstName.textContent = "Format incorrect";
            firstName.style.color = "orange";
            //Si le champ est vide
        } else if (lastName.validity.valueMissing) {
            event.preventDefault();
            lastName.textContent = "Nom manquant";
            lastName.style.color = "red";
            //Si le format de données est incorrect
        } else if (lastNameOk.test(lastName.value) == false) {
            event.preventDefault();
            lastName.textContent = "Format incorrect";
            lastName.style.color = "orange";
            //Si le champ est vide
        } else if (address.validity.valueMissing) {
            event.preventDefault();
            address.textContent = "Adresse manquante";
            address.style.color = "red";
            //Si le format de données est incorrect
        } else if (addressOk.test(address.value) == false) {
            event.preventDefault();
            address.textContent = "Format incorrect";
            address.style.color = "orange";
            //Si le champ est vide
        } else if (zipcode.validity.valueMissing) {
            event.preventDefault();
            zipcode.textContent = "Code postal manquant";
            zipcode.style.color = "red";
            //Si le format de données est incorrect
        } else if (zipCodeOk.test(zipCode.value) == false) {
            event.preventDefault();
            zipcode.textContent = "Format incorrect";
            zipcode.style.color = "orange";
            //Si le champ est vide
        } else if (city.validity.valueMissing) {
            event.preventDefault();
            city.textContent = "Ville manquante";
            city.style.color = "red";
            //Si le format de données est incorrect
        } else if (cityOk.test(city.value) == false) {
            event.preventDefault();
            city.textContent = "Format incorrect";
            city.style.color = "orange";
            //Si le champ est vide
        } else if (email.validity.valueMissing) {
            event.preventDefault();
            email.textContent = "Courriel manquant";
            email.style.color = "red";
            //Si le format de données est incorrect
        } else if (emailOk.test(email.value) == false) {
            event.preventDefault();
            email.textContent = "Format incorrect";
            email.style.color = "orange";
            console.log(emailOk.value)
        } else if (panier == null) {
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