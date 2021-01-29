function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
  let pizzaPrice = 0
  let toppings = this.toppings
  if (this.size === "small") {
    pizzaPrice += 5;
  } else if (this.size === "medium") {
    pizzaPrice += 10;
  } else if (this.size === "large") {
    pizzaPrice += 15;
  }
  pizzaPrice += toppings.length;
  return pizzaPrice;
}

pizza1 = new Pizza("small", ["olives", "sausage", "salami"]);

console.log("Your pizza will cost $" + pizza1.price());