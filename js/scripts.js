function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
  console.log("started price prototype");
  let pizzaPrice = 0;
  let toppings = this.toppings;
  if (this.size === "small") {
    console.log("this is a small pizza");
    pizzaPrice += 5;
  } else if (this.size === "medium") {
    console.log("this is a medium pizza");
    pizzaPrice += 10;
  } else if (this.size === "large") {
    console.log("this is a large pizza");
    pizzaPrice += 15;
  }
  if (toppings != undefined) {
    pizzaPrice += toppings.length;
  }
  return pizzaPrice;
}

pizza1 = new Pizza("small", ["olives", "sausage", "salami"]);
pizza2 = new Pizza("medium", ["jalapenos", "tomato", "bacon", "pineapple", "ground beef", "onions"]);
pizza3 = new Pizza("large", ["pepperoni"]);
pizza4 = new Pizza("medium");

console.log("Your pizza1 will cost $" + pizza1.price());
console.log("Your pizza2 will cost $" + pizza2.price());
console.log("Your pizza3 will cost $" + pizza3.price());
console.log("Your pizza4 will cost $" + pizza4.price());