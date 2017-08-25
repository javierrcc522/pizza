//bussiness logic
function Orderpizza(pizza, type, cheese, ham, artichoke) {
  this.pizza = pizza;
  this.type = type
  this.cheese = cheese;
  this.ham = ham;
  this.artichoke = artichoke;
};

Orderpizza.prototype.Pizza = function () {
  if (this.pizza === "largePizza") {
    return 15;
  } else if (this.pizza === "midPizza") {
    return 10;
  } else {
    return 7;
    console.log(Pizza);
  };
};

Orderpizza.prototype.Type = function () {
  if (this.type === "organicPizza"){
    return 5;
  } else {
    return 0;
  };
};

Orderpizza.prototype.Cheese = function () {
  if (this.cheese === "cheese") {
    return 1
  };
};

Orderpizza.prototype.Ham = function () {
  if (this.cheese === "ham") {
    return 2
  };
};

Orderpizza.prototype.Artichoke = function () {
  if (this.cheese === "artichoke") {
    return 3
  };
};




//user-interface logic
$(document).ready(function() {
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();
    var pickPizza = $("#sizePizza").val()
    var pickType = $("#typePizza").val()
    var pickCheese = $("#cheese").val()
    var pickHam = $("#ham").val()
    var pickArtichoke = $("#artichoke").val()
    var newPizza = new Orderpizza(pickPizza, pickType, pickCheese, pickHam, pickArtichoke)
  });
});
