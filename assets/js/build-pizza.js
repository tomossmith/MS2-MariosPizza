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