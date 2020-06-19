//Business Logic
function Pizza(size, crust, sauce, toppings){
  this.size = size,
  this.crust = crust,
  this.sauce = sauce,
  this.toppings = toppings
}

Pizza.prototype.sizePrice = function(size){
  let sizePrice = 0;
  if (size === "10"){
    sizePrice = "8";
  } else if (size === "12") {
    sizePrice = "10";
  } else if (size === "16") {
    sizePrice = "14";   
  } else if (size === "20") {
      sizePrice = "15";
  } else if (size === "22") {
      sizePrice = "16";
  }
  return(sizePrice);
}

Pizza.prototype.crustPrice = function(crust){
  let crustPrice = 0;
  if (crust === "chewy" || crust === "thin"){
    crustPrice = "0";
  } else {
    crustPrice = "2";
  }
  return crustPrice;
}

Pizza.prototype.saucePrice = function(sauce){
  let outputPrice = 0;
  if (sauce === "red" || sauce === "bare"){
    saucePrice = "0";
  } else {
    saucePrice = "2";
  }
  console.log(saucePrice);
}

Pizza.prototype.saucePrice = function(sauce){
  let outputPrice = 0;
  if (sauce === "red" || sauce === "bare"){
    saucePrice = "0";
  } else {
    saucePrice = "2";
  }
  console.log(saucePrice);
}


  //UI Logic
$(document).ready(function() {
  $("form#userInput").submit(function(event){ 
    event.preventDefault();
    const size = $("input:radio[name=pizza-size]:checked").val();
    const crust = $("input:radio[name=pizza-crust]:checked").val();
    const sauce = $("input:radio[name=pizza-sauce]:checked").val();
    let toppings = [0];
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      const toppings = $(this).val();
      toppings.push(pizza-toppings);
      const 
    });
    let pizza = new Pizza(size, crust, sauce, toppings);
    const sizePrice = pizza.sizePrice(size);
    const crustPrice = pizza.crustPrice(crust);
    const saucePrice = pizza.saucePrice(sauce);
    const toppingsPrice = pizza.toppingsPrice(toppings);
   
  });

});