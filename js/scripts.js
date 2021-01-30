function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
  let pizzaPrice = 0;
  let toppings = this.toppings;
  if (this.size === "small") {
    pizzaPrice += 5;
  } else if (this.size === "medium") {
    pizzaPrice += 10;
  } else if (this.size === "large") {
    pizzaPrice += 15;
  }
  if (toppings != undefined) {
    pizzaPrice += toppings.length;
  }
  return pizzaPrice;
};

function undefinedFilter(array) {
  filteredArray = array.filter(function (element) {
    return element != null;
  });
  return filteredArray;
};

$(document).ready(function() {
  $("#build-pizza").click(function() {
    $("#build-pizza").slideUp();
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
    const pizzaSize = $("input:radio[name=pizza-size]:checked").val();
    const pizzaToppings = toppingsAssembler();
    const clientPizza = new Pizza(pizzaSize, pizzaToppings);
    $("#total-cost").show();
    $("#pizza-total").html(clientPizza.price());
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