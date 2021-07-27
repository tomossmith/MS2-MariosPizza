function sendMail(pizzaForm) {
    console.log("EmailJS Loaded")


        var checkPepperoni = "No";
        var checkChillies = "No";
        var checkHam = "No";
        var checkMushrooms = "No";
        var checkPeppers = "No";
        var checkPineapple = "No";
        var checkPrawns = "No";
        var checkHerbs = "No";
        var checkOlives = "No";
        var checkOnions = "No";
        var checkTomatoes = "No";

        if (document.getElementById("Pepperoni").checked) {
          checkPepperoni = "Yes";
        }
        if (document.getElementById("Chillies").checked) {
            checkChillies = "Yes";
        }
          if (document.getElementById("Ham").checked) {
            checkHam = "Yes";
        }
        if (document.getElementById("Mushrooms").checked) {
            checkMushrooms = "Yes";
          }
          if (document.getElementById("Peppers").checked) {
            checkPeppers = "Yes";
          }
          if (document.getElementById("Pineapple").checked) {
            checkPineapple = "Yes";
          }
          if (document.getElementById("Prawns").checked) {
            checkPrawns = "Yes";
          }
          if (document.getElementById("Herbs").checked) {
            checkHerbs = "Yes";
          }
          if (document.getElementById("Olives").checked) {
            checkOlives = "Yes";
          }
          if (document.getElementById("Onions").checked) {
            checkOnions = "Yes";
          }
          if (document.getElementById("Tomatoes").checked) {
            checkTomatoes = "Yes";
          }



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
  var checkedBoxes = getCheckedBoxes("pizza_topping");


  // Pricing

    // PRICE CALCULATOR FUNCTIONS
  // Global Price Function Variables
var cheeseSubtotal = 0.00;
var sauceSubtotal = 0.00;

// Sauce Subtotal
$('#sauceType').change(function() {
    var sauceSubtotal = 0.00;
    $('#sauceType').each(function() {
        if($(this).val() == 'Mariana') {
            sauceSubtotal += parseFloat(1.00);
        }
        else if($(this).val() == 'BBQ') {
          sauceSubtotal += parseFloat(1.10);
      }
      else {
       sauceSubtotal += parseFloat(0.00)
      }
    });

 });

 // Cheese Subtotal
 $('.cheese').change(function() {
    var cheeseSubtotal = 0.00;
    $('.cheese').each(function() {
        if($(this).val() == 'Add Cheese?') {
            cheeseSubtotal += parseFloat(0.00);
        }
        else if($(this).val() == 'standardCheese') {
            cheeseSubtotal += parseFloat(1.00);
        }
        else if($(this).val() == 'extraCheese') {
          cheeseSubtotal += parseFloat(2.00);
      }
      else {
       cheeseSubtotal += parseFloat(0.00)
      }
    });
});

// Topping Subtotal
function calculateToppingCost() {
    var numberOfCheckedToppings = $('input:checkbox:checked').length;
    var toppingSubtotal = numberOfCheckedToppings * 0.50;
};

//Pizza Total Cost

val_1 = Number($('#sizeSubtotal').html()),
val_2 = Number($('#crustSubtotal').html()),
val_3 = Number($('#toppingSubtotal').html()), 
val_4 = Number($('#cheeseSubtotal').html()),
val_5 = Number($('#sauceSubtotal').html());


var subtotal = 1 + val_1 + val_2 + val_3 + val_4 + val_5;
var total = subtotal.toFixed(Math.max(((subtotal+'').split(".")[1]||"").length, 2));

console.log(subtotal);
console.log(total);

// Send Email

    emailjs.send("service_be3wq2q", "mario", {
        "from_name": pizzaForm.name.value,
        "from_email": pizzaForm.emailaddress.value,
        "phone": pizzaForm.phone.value,
        "collect_from": pizzaForm.store.value,
        "collect_time": pizzaForm.time.value,
        "size": pizzaForm.size.value,
        "base": pizzaForm.crust.value,
        "sauce": pizzaForm.sauceType.value,
        "pepperoni": checkPepperoni,
        "chillies": checkChillies,
        "ham": checkHam,
        "mushrooms": checkMushrooms,
        "peppers": checkPeppers,
        "pineapple": checkPineapple,
        "prawns": checkPrawns,
        "italian-herbs": checkHerbs,
        "olives": checkOlives,
        "onions": checkOnions,
        "tomatoes": checkTomatoes,
        "price": total,


    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Thank You For Your Order")
        },
        function(error) {
            console.log("FAILED", error);
            alert("Something went wrong, please check you have completed all the fields correctly and try again.")
        })

    return false;  // To block from loading a new page
}