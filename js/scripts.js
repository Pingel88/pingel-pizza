function Pizza(name, size, sauce, cheese, toppings) {
  this.name = name;
  this.price = 0;
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
};

Pizza.prototype.addPrice = function() {
  let toppings = this.toppings;
  if (this.size === "small") {
    this.price += 5;
    if (toppings != undefined) {
      this.price += toppings.length;
    }
  } else if (this.size === "medium") {
    this.price += 10;
    if (toppings != undefined) {
      this.price += toppings.length * 2;
    }
  } else if (this.size === "large") {
    this.price += 15;
    if (toppings != undefined) {
      this.price += toppings.length * 3;
    }
  }
};

function undefinedFilter(array) {
  filteredArray = array.filter(function (element) {
    return element != null;
  });
  return filteredArray;
};

Pizza.prototype.updateCartTotal = function(cartTotal) {
  let newCartTotal = this.price + cartTotal;
  return newCartTotal;
};

Pizza.prototype.addToCart = function() {
  $("#pizzas").append("<h5 id='pizza-name-in-cart-" + this.pizzaId + "'>" + this.name + " - $" + this.price + "</h5>");
  $("#pizzas").append("<p id='pizza-in-cart-" + this.pizzaId + "'><span class='pizza-key'>Size: </span>" + this.size + "</br><span class='pizza-key'>Sauce: </span>" + this.sauce + "<br><span class='pizza-key'>Cheese: </span>" + this.cheese + "<br><span class='pizza-key'>Toppings: </span>" + this.toppings + "</p>");
};

Pizza.prototype.attachListeners = function() {
  const pizzaId = this.pizzaId;
  $("#pizzas").on("click", "#pizza-name-in-cart-" + pizzaId, function() {
    $("#pizza-in-cart-" + pizzaId).slideToggle();
  });
};

Pizza.prototype.applyId = function(pizzaId) {
  this.pizzaId = pizzaId;
};

$(document).ready(function() {
  $("#small").prop('checked', true);
  $("#tomato").prop('checked', true);
  $("#mozzarella").prop('checked', true);
  let cart = 0;
  let iteration = 2;
  let pizzaId = 0;

  $("#build-pizza").click(function() {
    $("#heading-text").hide();
    $("#heading").slideUp();
    $("#build-pizza").slideUp();
    $("#pizza-menu").slideDown();
    $("#main-interface").slideDown();
  });

  $("#size-header").click(function() {
    $("#radio-buttons-size").slideToggle();
  });

  $("#sauce-header").click(function() {
    $("#radio-buttons-sauce").slideToggle();
  });

  $("#cheese-header").click(function() {
    $("#radio-buttons-cheese").slideToggle();
  });

  $("#meats-header").click(function() {
    $("#radio-buttons-meats").slideToggle();
  });

  $("#unmeats-header").click(function() {
    $("#radio-buttons-unmeats").slideToggle();
  });


  $("form.pizza").submit(function(event) {
    event.preventDefault();
    const pizzaName = $("input#pizza-name-field").val();
    const pizzaSize = $("input:radio[name=pizza-size]:checked").val();
    const pizzaSauce = $("input:radio[name=pizza-sauce]:checked").val();
    const pizzaCheese = $("input:radio[name=pizza-cheese]:checked").val();
    const pizzaToppings = toppingsAssembler();
    const clientPizza = new Pizza(pizzaName, pizzaSize, pizzaSauce, pizzaCheese, pizzaToppings);
    $("#cart").slideDown();
    clientPizza.addPrice();
    clientPizza.applyId(pizzaId);
    clientPizza.addToCart();
    newCartTotal = clientPizza.updateCartTotal(cart);
    clientPizza.attachListeners();
    updateCartTotal(newCartTotal);
    cart = newCartTotal;
    uncheckToppings();
    $("#name-update").html("<input type='text' id='pizza-name-field' value='Pizza " + iteration + "'>");
    pizzaId ++;
    iteration ++;
  });
});

function toppingsAssembler() {
  const pizzaToppings = [
    $("input:checkbox[name=bacon]:checked").val(),
    $("input:checkbox[name=ground-beef]:checked").val(),
    $("input:checkbox[name=ham]:checked").val(),
    $("input:checkbox[name=italian-sausage]:checked").val(),
    $("input:checkbox[name=pepperoni]:checked").val(),
    $("input:checkbox[name=salami]:checked").val(),
    $("input:checkbox[name=garlic]:checked").val(),
    $("input:checkbox[name=green-bell-peppers]:checked").val(),
    $("input:checkbox[name=jalapenos]:checked").val(),
    $("input:checkbox[name=mushroom]:checked").val(),
    $("input:checkbox[name=olives]:checked").val(),
    $("input:checkbox[name=onion]:checked").val(),
    $("input:checkbox[name=pineapple]:checked").val(),
  ];
  const filteredPizzaToppings = undefinedFilter(pizzaToppings);
  return filteredPizzaToppings;
};

function updateCartTotal(newCartTotal) {
  console.log("this should update the text with" + newCartTotal);
  $("#cart-total").text(newCartTotal);
};

function uncheckToppings() {
  $("#bacon").prop('checked', false);
  $("#ground-beef").prop('checked', false);
  $("#ham").prop('checked', false);
  $("#italian-sausage").prop('checked', false);
  $("#pepperoni").prop('checked', false);
  $("#salami").prop('checked', false);
  $("#garlic").prop('checked', false);
  $("#green-bell-peppers").prop('checked', false);
  $("#jalapenos").prop('checked', false);
  $("#mushroom").prop('checked', false);
  $("#olives").prop('checked', false);
  $("#onion").prop('checked', false);
  $("#pineapple").prop('checked', false);
};