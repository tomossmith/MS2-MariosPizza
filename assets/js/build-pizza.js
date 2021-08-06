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

// IMAGE SHOW/HIDE FUNCTIONS

// Sauce Dropdown Function   
$(document).ready(function sauceDropdownFunction() {
    $('#sauceType').on('change', function () {
        var ingredientVariable = $("#sauceType option:selected").text();
        $("div.sauceImages").hide();
        $("#show" + ingredientVariable).show();
    });
});

// CREDIT: https://tutorialdeep.com/knowhow/change-image-on-dropdown-select-option-jquery/

// Cheese Dropdown Function  

$(document).ready(function cheeseDropdownFunction() {
    $('#cheeseType').on('change', function () {
        var ingredientVariable = $("#cheeseType option:selected").text();
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PRICE CALCULATOR FUNCTIONS

// Size Subtotal
$('.size').change(function () {
    var sizeSubtotal = 0.00;
    $('.size').each(function () {
        if ($(this).val() == '4.00') {
            sizeSubtotal += parseFloat(4.00);
        } else if ($(this).val() == '6.00') {
            sizeSubtotal += parseFloat(6.00);
        } else if ($(this).val() == '8.00') {
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
        if ($(this).val() == '0.50') {
            crustSubtotal += parseFloat(0.50);
        } else if ($(this).val() == '0.75') {
            crustSubtotal += parseFloat(0.75);
        } else if ($(this).val() == '1.50') {
            crustSubtotal += parseFloat(1.50);
        } else {
            crustSubtotal += parseFloat(0.00)
        }
    });
    document.getElementById("crustSubtotal").innerHTML = crustSubtotal.toFixed(2);
});

// Sauce Subtotal
$('#sauceType').change(function () {
    var sauceSubtotal = 0.00;
    $('#sauceType').each(function () {
        if ($(this).val() == '1.00') {
            sauceSubtotal += parseFloat(1.00);
        } else if ($(this).val() == '1.10') {
            sauceSubtotal += parseFloat(1.10);
        } else {
            sauceSubtotal += parseFloat(0.00)
        }
    });
    document.getElementById("sauceSubtotal").innerHTML = sauceSubtotal.toFixed(2);
});

// Cheese Subtotal
$('#cheeseType').change(function () {
    var cheeseSubtotal = 0.00;
    $('#cheeseType').each(function () {
        if ($(this).val() == '0') {
            cheeseSubtotal += parseFloat(0.00);
        } else if ($(this).val() == '1.00') {
            cheeseSubtotal += parseFloat(1.00);
        } else if ($(this).val() == '2.00') {
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
    var sizeCost = Number(document.pizzaForm.size.value);
    var crustCost = Number(document.pizzaForm.crust.value);
    var sauceCost = Number(document.pizzaForm.sauceType.value);
    var cheeseCost = Number(document.pizzaForm.cheeseType.value);
    var toppingCost = Number($('#toppingSubtotal').html());


    var total = sizeCost + crustCost + sauceCost + cheeseCost + toppingCost;
    document.getElementById("pizzaTotalCost").innerHTML = total.toFixed(2);
}


//Pizza Reset
function pizzaReset() {
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

    document.getElementById("size").value = "0";
    document.getElementById("crust").value = "0";
    document.getElementById("sauceType").value = "0";
    document.getElementById("cheeseType").value = "000";
    document.getElementById("Pepperoni").checked = false;
    document.getElementById("Chillies").checked = false;
    document.getElementById("Ham").checked = false;
    document.getElementById("Mushrooms").checked = false;
    document.getElementById("Peppers").checked = false;
    document.getElementById("Pineapple").checked = false;
    document.getElementById("Prawns").checked = false;
    document.getElementById("Herbs").checked = false;
    document.getElementById("Olives").checked = false;
    document.getElementById("Onions").checked = false;
    document.getElementById("Tomatoes").checked = false;
    document.getElementById("fullname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("emailaddress").value = "";
    document.getElementById("store").value = "0";
    document.getElementById("time").value = "00:00";
}