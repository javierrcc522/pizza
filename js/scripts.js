//bussiness logic
function Orderpizza(pizza, cheese, ham, artichoke, meats) {
  this.pizza = pizza;
  this.type = type
  this.cheese = cheese;
  this.ham = ham;
  this.artichoke = artichoke;
  this.meats = meats;
};

Orderpizza.prototype.Pizza = function () {
  if (this.pizza === "largePizza") {
    return 15;
  } else if (this.pizza === "midPizza") {
    return 10;
  } else {
    return 7;
  };
};

Orderpizza.prototype.Type = function () {
  if (this.type === "organicPizza"){
    return 5;
  } else {
    return 0;
  }

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
    var pickMeats = $("#meats").val()
    var newPizza = new Orderpizza(pickPizza, pickType, pickCheese, pickHam, pickArtichoke, pickMeats)
  });
});
