function sendMail(pizzaForm) {
    console.log("EmailJS Loaded")
    emailjs.send("service_be3wq2q", "mario", {
        "from_name": pizzaForm.name.value,
        "from_email": pizzaForm.emailaddress.value,
        "phone": pizzaForm.phone.value,
        "size": pizzaForm.size.value,
        "base": pizzaForm.crust.value,
        "sauce": pizzaForm.sauceType.value,
        "pepperoni": pizzaForm.topping_1.checked,
        "chillies": pizzaForm.topping_2.checked,
        "ham": pizzaForm.topping_3.checked,
        "mushrooms": pizzaForm.topping_4.checked,    
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}