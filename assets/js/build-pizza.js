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