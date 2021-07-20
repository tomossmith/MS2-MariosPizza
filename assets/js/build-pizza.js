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
var cheeseSubtotal = 0;
var sauceSubtotal = 0;

// Sauce Subtotal
$('#sauceType').change(function() {
    var sauceSubtotal = 0;
    $('#sauceType').each(function() {
        if($(this).val() == 'Mariana') {
            sauceSubtotal += parseFloat(0.99);
        }
        else if($(this).val() == 'BBQ') {
          sauceSubtotal += parseFloat(0.99);
      }
      else {
       sauceSubtotal += parseFloat(0.00)
      }
    });
    //console.log(cheeseSubtotal)
    $('#sauceSubtotal').text('£' + sauceSubtotal.toFixed(2));
 });

 // Cheese Subtotal
 $('.cheese').change(function() {
    var cheeseSubtotal = 0;
    $('.cheese').each(function() {
        if($(this).val() == 'standardCheese') {
            cheeseSubtotal += parseFloat(0.99);
        }
        else if($(this).val() == 'extraCheese') {
          cheeseSubtotal += parseFloat(1.99);
      }
      else {
       cheeseSubtotal += parseFloat(0.00)
      }
    });
    //console.log(cheeseSubtotal)
    $('#cheeseSubtotal').text('£' + cheeseSubtotal.toFixed(2));
});