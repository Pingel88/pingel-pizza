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
    $("input:radio[name=bacon]:checked").val(), 
    $("input:radio[name=ground-beef]:checked").val(), 
    $("input:radio[name=ham]:checked").val(), 
    $("input:radio[name=italian-sausage]:checked").val(), 
    $("input:radio[name=pepperoni]:checked").val(), 
    $("input:radio[name=salami]:checked").val(), 
    $("input:radio[name=garlic]:checked").val(), 
    $("input:radio[name=green-bell-peppers]:checked").val(), 
    $("input:radio[name=jalapenos]:checked").val(), 
    $("input:radio[name=mushroom]:checked").val(), 
    $("input:radio[name=olives]:checked").val(), 
    $("input:radio[name=onion]:checked").val(), 
    $("input:radio[name=pineapple]:checked").val(), 
  ];
  const filteredPizzaToppings = undefinedFilter(pizzaToppings);
  return filteredPizzaToppings;
};