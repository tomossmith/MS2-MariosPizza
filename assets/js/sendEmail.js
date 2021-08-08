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

  // Pricing

  var sizeCost = Number(document.pizzaForm.size.value);
  var crustCost = Number(document.pizzaForm.crust.value);
  var sauceCost = Number(document.pizzaForm.sauceType.value);
  var cheeseCost = Number(document.pizzaForm.cheeseType.value);
  var toppingCost = Number($('#toppingSubtotal').html());
  var totalPrice = sizeCost + crustCost + sauceCost + cheeseCost + toppingCost;

  // Selection
  var baseSize = $("#size option:selected").text();
  var crustType = $("#crust option:selected").text();
  var sauceType = $("#sauceType option:selected").text();

  // Send Email
  emailjs.send("service_be3wq2q", "mario", {
      "from_name": pizzaForm.name.value,
      "from_email": pizzaForm.emailaddress.value,
      "phone": pizzaForm.phone.value,
      "collect_from": pizzaForm.store.value,
      "collect_time": pizzaForm.time.value,
      "size": baseSize,
      "base": crustType,
      "sauce": sauceType,
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
      "price": totalPrice,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
        alert("Thank You For Your Order")
        document.getElementById("size").value = "";
        document.getElementById("crust").value = "";
        document.getElementById("sauceType").value = "";
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
        document.getElementById("store").value = "";
        document.getElementById("time").value = "00:00";
        $("#pizzaTotalCost").text("")      
      },
      function (error) {
        console.log("FAILED", error);
        alert("Something went wrong, please check you have completed all the fields correctly and try again. If you continue to receive the error, please call us on +021 2431 4505")
      })
  return false;
}