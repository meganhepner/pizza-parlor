//Business Logic
function Pizza(size, crust, sauce, toppings){
  this.size = size,
  this.crust = crust,
  this.sauce = sauce,
  this.toppings = toppings
}

function Owner(price){
  this.price = price
}

 function displayPrice(owner) { 
  $("#price-10").text(owner.price) ;
  console.log(price);
  // $("#player2-score").text(game.player2.score) //score display for player2
  // $("#turn-total").text(game.turnTotal) //turnTotal display 
}

Pizza.prototype.sizePrice = function(crust, price){
  let outputPrice = 0;
  owner.price = [];
  console.log(price);
  if (crust === "chewy" || crust === "thin"){
    crustPrice = "0";
  } else {
    crustPrice = "2";
  }
  console.log(crustPrice);
  }

Pizza.prototype.crustPrice = function(crust){
  let outputPrice = 0;
  if (crust === "chewy" || crust === "thin"){
    crustPrice = "0";
  } else {
    crustPrice = "2";
  }
  console.log(crustPrice);
  }




  //UI Logic
$(document).ready(function() {
  $("form#ownerInput").submit(function(event){ 
    event.preventDefault();
    const price = $("input:radio[name=pizza-price]:checked").val();
    let owner = new Owner(price);
    displayPrice(owner);

  });
  $("form#userInput").submit(function(event){ 
    event.preventDefault();
    const size = $("input:radio[name=pizza-size]:checked").val();
    const crust = $("input:radio[name=pizza-crust]:checked").val();
    const sauce = $("input:radio[name=pizza-sauce]:checked").val();
    let toppings = [0];
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      const toppings = $(this).val();
      toppings.push(pizza-toppings);
    });
    let pizza = new Pizza(size, crust, sauce, toppings);
    let price = displayPrice(owner);
    const sizePrice = pizza.sizePrice(size);
    const crustPrice = pizza.crustPrice(crust);
   
  });

});