# _Pingel Pizza_
#### _Welcome to Pingel Pizza! A pizza parlor with a large assortment of toppings and sizes._
#### _By Mike Pingel_
## Technologies Used
* _HTML_
* _CSS_
* _Google Fonts_
* _Javascript_
* _jQuery_
* _GitHub_
## Description
#### On this website for Pingel Pizza, you'll be able to order custom pizzas from a limitless pantry full of questionable ingredients. This project utilizes JavaScript object constructors and prototypes to allow the user to build custom pizzas in an interactive user interface.
## Setup/Installation Instructions
* Viewable at: https://pingel88.github.io/pingel-pizza/
* Alternatively, to view this webpage and the project contents offline:
  * Copy the repository URL to your clipboard: `https://github.com/Pingel88/pingel-pizza.git`
  * Open Git Bash or your preferred equivalent
  * Change the current working directory to where you want the cloned directory
  * Type `git clone`, then paste the URL from your clipboard and press enter
  * Navigate to the top level of the cloned directory
  * Open index.html to view the webpage
## Specs
```
Describe: Pizza()
Test: "It should create a pizza object"
Expect: (new Pizza("pizza1", "large", "tomato", "mozzarella", ["pepperoni", "pineapple"]).toEqual({name: "pizza1", size: "large", sauce: "tomato", cheese: "mozzarella" toppings: ["pepperoni", "pineapple"]})

Describe: Pizza.prototype.addPrice()
Test: "It should update the price key with a value based on values of the size and toppings keys of the pizza object"
Code: const pizza1 = new Pizza("pizza1", "small", "tomato", "mozzarella", ["olives", "sausage", "salami"])
Expect: (pizza1.price).toEqual(8)

Test: "It should update the price key with a value based on values of the size and toppings keys of the pizza object"
Code: const pizza2 = new Pizza("pizza2", "medium", "tomato", "mozzarella", ["jalapenos", "tomato", "bacon", "pineapple", "ground-beef", "onions"])
Expect: (pizza2.price).toEqual(22)

Test: "It should update the price key with a value based on values of the size and toppings keys of the pizza object"
Code: const pizza3 = new Pizza("pizza3", "large", "tomato", "mozzarella", ["pepperoni"])
Expect: (pizza3.price).toEqual(18)

Test: "It should return a number based on the properties of the pizza object"
Code: const pizza4 = new Pizza("pizza4", "medium", "tomato", "mozzarella")
Expect: (pizza4.price).toEqual(10)

Describe: undefinedFilter()
Test: "It should return an array without any undefined elements"
Code: const three = 3; const uglyArray = ["one", 2, three, undefined, 5, undefined, "six"]
Expect: (undefinedFilter(uglyArray)).toEqual(["one", 2, 3, 5, "six"])
```
## Contact Information
#### Mike Pingel
#### [Email](mailto:mdpingel@gmail.com?subject=[GitHub]Epicodus%20Project%20-%20Pingel%20Pizza)
## Copyright & License Information
#### MIT
#### Copyright &copy; 2021 Michael Pingel