//Business Logic
function Pizza(size, crust, sauce, toppings){
  this.size = size,
  this.crust = crust,
  this.sauce = sauce,
  this.toppings = toppings
}

Pizza.prototype.pizzaPrice = function(ticketPrice, discountPrice){
  let outputPrice = 0;
  outputPrice = ticketPrice - (discountPrice * this.discounts);
  return outputPrice;
}

$(document).ready(function() {
  $("form#userInput").submit(function(event){ 
    event.preventDefault();
  });
});