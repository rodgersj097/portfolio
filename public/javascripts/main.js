 var submit = document.querySelector('.submitButton')
 var fullName = document.querySelector('#fullName')
 var email = document.querySelector('#email')
 var content = document.querySelector('#content')


 submit.addEventListener('click', function() {
     var validatedEmail = validateEmail(email.value)
     var data = {
         fullName: fullName.value,
         email: validatedEmail,
         content: content.value
     }

     $.ajax({
         url: "/email",
         data: data,
         type: 'post'
     })
 })


 function validateEmail(email) {
     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(String(email).toLowerCase());
 }