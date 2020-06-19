//Business Logic
function Pizza(size, crust, sauce, allToppings){
  this.size = size,
  this.crust = crust,
  this.sauce = sauce,
  this.allToppings = allToppings
}

Pizza.prototype.sizePrice = function(size){
  let sizeTotal = 0;
  if (size === "10"){
    sizeTotal = "8";
  } else if (size === "12") {
    sizeTotal = "10";
  } else if (size === "16") {
    sizeTotal = "14";   
  } else if (size === "20") {
    sizeTotal = "15";
  } else if (size === "22") {
    sizeTotal = "16";
  }
  return(sizeTotal);
}

Pizza.prototype.crustPrice = function(crust){
  let crustTotal = 0;
  if (crust === "Thick & Chewy" || crust === "Thin & Crisp"){
    crustTotal = "0";
  } else {
    crustTotal = "2";
  }
  return crustTotal;
}

Pizza.prototype.saucePrice = function(sauce){
  let sauceTotal = 0;
  if (sauce === "Crushed Tomato" || sauce === "Olive Oil"){
    sauceTotal = "0";
  } else {
    sauceTotal = "2";
  }
  return sauceTotal;
}

Pizza.prototype.toppingsPrice = function(allToppings){
  let toppingsTotal = [];
  for (i = 0; i <= allToppings.length; i++){
    if (allToppings[i] === "mozzarella"){
      toppingsTotal.push(0);
    } else if (allToppings[i] === "pepperoni" || allToppings[i] === "spinach" || allToppings[i] === "broccoli") {
      toppingsTotal.push(1);
    } else if (allToppings[i] === "gorgonzola" || allToppings[i] === "prosciutto" || allToppings[i] === "artichoke"){
      toppingsTotal.push(2);
    }
  }
  return toppingsTotal;
}

function addingMachine(sizePrice, crustPrice, saucePrice, toppingsPrice){
  const add = (accumulator, currentValue) => accumulator + currentValue;
  toppingsPrice = (toppingsPrice.reduce(add));
  pizzaTotal = (sizePrice + crustPrice + saucePrice + toppingsPrice)
  return pizzaTotal;
}

  //UI Logic
$(document).ready(function() {
  $("form#userInput").submit(function(event){ 
    event.preventDefault();
    const size = $("input:radio[name=pizza-size]:checked").val();
    const crust = $("input:radio[name=pizza-crust]:checked").val();
    const sauce = $("input:radio[name=pizza-sauce]:checked").val();
    const allToppings = [];
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      const toppings = $(this).val();
      allToppings.push(toppings);
    });
    let pizza = new Pizza(size, crust, sauce, allToppings);
    const sizePrice = parseInt(pizza.sizePrice(size));
    const crustPrice = parseInt(pizza.crustPrice(crust));
    const saucePrice = parseInt(pizza.saucePrice(sauce));
    const toppingsPrice = pizza.toppingsPrice(allToppings);
    const totalPrice = addingMachine(sizePrice, crustPrice, saucePrice, toppingsPrice);
    $(".size").text(pizza.size);
    $(".crust").text(pizza.crust);
    $(".sauce").text(pizza.sauce);
    pizzaString = String(pizza.allToppings);
    $(".toppings").text(pizzaString);
    $(".price").text(totalPrice);
    $("#show-input").show();
 
   
  });

});