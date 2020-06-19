//Business Logic
function Pizza(size, crust, sauce, toppings){
  this.size = size,
  this.crust = crust,
  this.sauce = sauce,
  this.toppings = toppings
}

Pizza.prototype.sizePrice = function(crust){
  let outputPrice = 0;
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
    const sizePrice = pizza.sizePrice(size);
    const crustPrice = pizza.crustPrice(crust);
   
  });
  $("form#ownerInput").submit(function(event){ 
    event.preventDefault();
    const price = $("input:radio[name=pizza-price]:checked").val();
    console.log(price);

  });
});