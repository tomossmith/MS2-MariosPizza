function sendMail(pizzaForm) {
    console.log("EmailJS Loaded")

    // Pass the checkbox name to the function
function getCheckedBoxes(pizza_topping) {
    var checkboxes = document.getElementsByName(pizza_topping);
    var checkboxesChecked = [];
    // loop over them all
    for (var i=0; i<checkboxes.length; i++) {
       // And stick the checked ones onto an array...
       if (checkboxes[i].checked) {
          checkboxesChecked.push(checkboxes[i]);
       }
    }
    // Return the array if it is non-empty, or null
    return checkboxesChecked.length > 0 ? checkboxesChecked : null;
  }
  
  // Call as
  var checkedBoxes = getCheckedBoxes("mycheckboxes");

    emailjs.send("service_be3wq2q", "mario", {
        "from_name": pizzaForm.name.value,
        "from_email": pizzaForm.emailaddress.value,
        "phone": pizzaForm.phone.value,
        "collect_from": pizzaForm.store.value,
        "collect_time": pizzaForm.time.value,
        "size": pizzaForm.size.value,
        "base": pizzaForm.crust.value,
        "sauce": pizzaForm.sauceType.value,
        "pepperoni": pizzaForm.topping_1.value,
        "chillies": pizzaForm.topping_2.value,
        "ham": pizzaForm.topping_3.value,
        "mushrooms": pizzaForm.topping_4.value,
        "peppers": pizzaForm.topping_5.value,
        "pineapple": pizzaForm.topping_6.value, 
        "prawns": pizzaForm.topping_7.value, 
        "italian_herbs": pizzaForm.topping_8.value, 
        "olives": pizzaForm.topping_9.value, 
        "onions": pizzaForm.topping_10.value, 
        "tomatoes": pizzaForm.topping_11.value,
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