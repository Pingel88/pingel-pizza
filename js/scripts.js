// Business Logic ---------------------

function Pizza(name, size, sauce, cheese, toppings) {
  this.name = name;
  this.price = 0;
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
};

function undefinedFilter(array) {
  const filteredArray = array.filter(function (element) {
    return element != null;
  });
  return filteredArray;
};

function splitHyphen(string) {
  const stringArray = string.split("-");
  const stringArrayCapitalized = stringArray.map(function(element) {
    return element.charAt(0).toUpperCase() + element.slice(1);
  });
  return stringArrayCapitalized.join(" ");
};

// Business Logic Pizza Prototypes -------------------------

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

Pizza.prototype.capitalizeToppings = function() {
  const toppingsArrayCapitalized = [];
  const toppings = this.toppings;
  if (toppings.length > 0) {
    toppings.map(function (element) {
      if (element.includes("-")) {
        toppingsArrayCapitalized.push(splitHyphen(element));
      } else {
        elementCapitalized = element.charAt(0).toUpperCase() + element.slice(1);
        toppingsArrayCapitalized.push(elementCapitalized);
      }
    });
  } else {
    toppingsArrayCapitalized.push("No Toppings");
  }
  return toppingsArrayCapitalized.join(", ");
};

// UI Logic Pizza Prototypes ----------------------

Pizza.prototype.attachListeners = function() {
  const pizzaId = this.pizzaId;
  $("#pizzas").on("click", "#pizza-name-in-cart-" + pizzaId, function() {
    $("#pizza-in-cart-" + pizzaId).slideToggle();
  });
};

Pizza.prototype.addToCart = function() {
  const sizeCapitalized = this.size.charAt(0).toUpperCase() + this.size.slice(1);
  const sauceCapitalized = this.sauce.charAt(0).toUpperCase() + this.sauce.slice(1);
  const cheeseCapitalized = splitHyphen(this.cheese);
  const toppingsCapitalized = this.capitalizeToppings();

  $("#pizzas").append("<h5 id='pizza-name-in-cart-" + this.pizzaId + "'>" + this.name + " - $" + this.price + "</h5>");
  $("#pizzas").append("<p id='pizza-in-cart-" + this.pizzaId + "'><span class='pizza-key'>Size: </span>" + sizeCapitalized + "</br><span class='pizza-key'>Sauce: </span>" + sauceCapitalized + "<br><span class='pizza-key'>Cheese: </span>" + cheeseCapitalized + "<br><span class='pizza-key'>Toppings: </span>" + toppingsCapitalized + "</p>");
};

// UI Logic --------------------------------

$(document).ready(function() {
  $("#medium").prop('checked', true);
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
    clientPizza.pizzaId = pizzaId;
    clientPizza.addToCart();
    newCartTotal = clientPizza.price + cart;
    clientPizza.attachListeners();
    $("#cart-total").text(newCartTotal);
    uncheckToppings();
    $("#name-update").html("<input type='text' id='pizza-name-field' value='Pizza " + iteration + "' autocomplete='off'>");
    cart = newCartTotal;
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