let validForm = document.getElementById('validcart');
        validForm.addEventListener('click', function(e){ 
                e.preventDefault();
                getFormCustomerOrder();
                sendFormCustomerOrder();
            })