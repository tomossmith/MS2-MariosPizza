$(document).ready(function () {
    var img_1 = document.getElementById("img_1")
    var img_2 = document.getElementById("img_2")
    var img_3 = document.getElementById("img_3")
    var img_4 = document.getElementById("img_4")
    var img_5 = document.getElementById("img_5")
    var img_6 = document.getElementById("img_6")
    var img_7 = document.getElementById("img_7")
    var img_8 = document.getElementById("img_8")
    var img_9 = document.getElementById("img_9")
    var img_10 = document.getElementById("img_10")
    var img_11 = document.getElementById("img_11")
    $(img_1).hide();
    $(img_2).hide();
    $(img_3).hide();
    $(img_4).hide();
    $(img_5).hide();
    $(img_6).hide();
    $(img_7).hide();
    $(img_8).hide();
    $(img_9).hide();
    $(img_10).hide();
    $(img_11).hide();
    console.log("document loaded");
});

// Size Subtotal
$('.size').change(function () {
    var sizeSubtotal = 0.00;
    $('.size').each(function () {
        if ($(this).val() == '6') {
            sizeSubtotal += parseFloat(4.00);
        } else if ($(this).val() == '9') {
            sizeSubtotal += parseFloat(6.00);
        } else if ($(this).val() == '12') {
            sizeSubtotal += parseFloat(8.00);
        } else {
            sizeSubtotal += parseFloat(0.00)
        }
    });
    document.getElementById("sizeSubtotal").innerHTML = sizeSubtotal.toFixed(2);
});

// Crust Subtotal
$('.crust').change(function () {
    var crustSubtotal = 0.00;
    $('.crust').each(function () {
        if ($(this).val() == 'Thin Crust') {
            crustSubtotal += parseFloat(0.50);
        } else if ($(this).val() == 'Deep Pan') {
            crustSubtotal += parseFloat(0.75);
        } else if ($(this).val() == 'Stuffed Crust') {
            crustSubtotal += parseFloat(1.50);
        } else {
            crustSubtotal += parseFloat(0.00)
        }
    });
    document.getElementById("crustSubtotal").innerHTML = crustSubtotal.toFixed(2);
});

// Sauce Dropdown Function   
$(document).ready(function sauceDropdownFunction() {
    $('#sauceType').on('change', function () {
        var ingredientVariable = $(this).val();
        $("div.sauceImages").hide();
        $("#show" + ingredientVariable).show();
    });
});

// CREDIT: https://tutorialdeep.com/knowhow/change-image-on-dropdown-select-option-jquery/

// Cheese Dropdown Function  

$(document).ready(function cheeseDropdownFunction() {
    $('#cheeseType').on('change', function () {
        var ingredientVariable = $(this).val();
        $("div.cheeseImages").hide();
        $("#show" + ingredientVariable).show();
    });
});

// Toppings Function  
$('input[name="pizza_topping"]').change(function toppings() {
    ingredientid = "#img_" + $(this).val();
    //show image if the checkbox is checked
    if ($(this).prop('checked')) {
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
$('#sauceType').change(function () {
    var sauceSubtotal = 0.00;
    $('#sauceType').each(function () {
        if ($(this).val() == 'Mariana') {
            sauceSubtotal += parseFloat(1.00);
        } else if ($(this).val() == 'BBQ') {
            sauceSubtotal += parseFloat(1.10);
        } else {
            sauceSubtotal += parseFloat(0.00)
        }
    });
    document.getElementById("sauceSubtotal").innerHTML = sauceSubtotal.toFixed(2);
});

// Cheese Subtotal
$('.cheese').change(function () {
    var cheeseSubtotal = 0.00;
    $('.cheese').each(function () {
        if ($(this).val() == 'Add Cheese?') {
            cheeseSubtotal += parseFloat(0.00);
        } else if ($(this).val() == 'standardCheese') {
            cheeseSubtotal += parseFloat(1.00);
        } else if ($(this).val() == 'extraCheese') {
            cheeseSubtotal += parseFloat(2.00);
        } else {
            cheeseSubtotal += parseFloat(0.00)
        }
    });
    document.getElementById("cheeseSubtotal").innerHTML = cheeseSubtotal.toFixed(2);
});

// Topping Subtotal
function calculateToppingCost() {
    var numberOfCheckedToppings = $('input:checkbox:checked').length;
    var toppingSubtotal = numberOfCheckedToppings * 0.50;
    document.getElementById("toppingSubtotal").innerHTML = toppingSubtotal.toFixed(2);
};

//Pizza Total Cost
function pizzaTotal() {
    val_1 = Number(document.pizzaForm.size.value);
    val_2 = Number($('#crustSubtotal').html());
    val_3 = Number($('#toppingSubtotal').html());
    val_4 = Number($('#cheeseSubtotal').html());
    val_5 = Number($('#sauceSubtotal').html());

    var total = val_1 + val_2 + val_3 + val_4 + val_5;
    document.getElementById("pizzaTotalCost").innerHTML = total.toFixed(2);
}