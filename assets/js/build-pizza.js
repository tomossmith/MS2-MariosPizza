$( document ).ready(function() {
    console.log( "document loaded" );
});

// Sauce Dropdown Function   
$( document ).ready(function sauceDropdownFunction() {
    $('#sauceType').on('change', function () {
        var ingredientVariable = $(this).val();
        $("div.sauceImages").hide();
        $("#show" + ingredientVariable).show();
    });
});

// CREDIT: https://tutorialdeep.com/knowhow/change-image-on-dropdown-select-option-jquery/

// Cheese Dropdown Function  

$(document).ready(function cheeseDropdownFunction(){
    $('#cheeseType').on('change', function(){
       var ingredientVariable = $(this).val(); 
        $("div.cheeseImages").hide();
        $("#show"+ingredientVariable).show();
    });
 });

 // Toppings Function  
 $('input[name="pizza_topping"]').change(function() {
    ingredientid = "#img_" + $(this).val();
    //show image if the checkbox is checked
    if($(this).prop('checked')) {
       $(ingredientid).show();
    }
    //hides image if it's not checked
    else {
       $(ingredientid).hide();
    }
 });

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
    document.getElementById("sauceSubtotal").innerHTML = sauceSubtotal.toFixed(2);
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
    document.getElementById("cheeseSubtotal").innerHTML = cheeseSubtotal.toFixed(2);
});

// Topping Subtotal
function calculateToppingCost() {
    var numberOfCheckedToppings = $('input:checkbox:checked').length;
    var toppingSubtotal = numberOfCheckedToppings * 0.50
    document.getElementById("toppingSubtotal").innerHTML = toppingSubtotal.toFixed(2);
}


function pizzaTotal() {
val_1 = Number($('#toppingSubtotal').html()), 
val_2 = Number($('#cheeseSubtotal').html()),
val_3 = Number($('#sauceSubtotal').html());

var total = 1 + val_1 + val_2 + val_3;
console.log(val_1);
console.log(val_2);
console.log(val_3);
console.log(total);
document.getElementById("pizzaTotalCost").innerHTML = total.toFixed(2);
}