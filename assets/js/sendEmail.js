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
        "size": pizzaForm.size.value,
        "base": pizzaForm.crust.value,
        "sauce": pizzaForm.sauceType.value,
        "pepperoni": pizzaForm.topping_1.label,
        "chillies": pizzaForm.topping_2.label,
        "ham": pizzaForm.topping_3.label,
        "mushrooms": pizzaForm.topping_4.label,    
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