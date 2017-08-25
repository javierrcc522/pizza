//bussiness logic
function Orderpizza(pizza, type, toppin) {
  this.pizza = pizza;
  this.type = type
  this.toppin = toppin;
};

Orderpizza.prototype.pizza = function () {
  if (this.pizza === "largePizza") {
    return 15;
  } else if (this.pizza === "midPizza") {
    return 10;
  } else {
    return 7;
  };
};

Orderpizza.prototype.type = function () {
  if (this.type === "organicPizza"){
    return 5;
  } else {
    return 0;
  };
};

Orderpizza.prototype.Toppin = function () {
  if (this.toppin === "cheese") {
    return 1
  };
};


//user-interface logic
$(document).ready(function() {
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();
    var pickPizza = $("#sizePizza").val();
    var pickType = $("#typePizza").val();
    var pickToppin = $("input:radio[name=toppings]:checked").val();
    var newPizza = new Orderpizza(pickPizza, pickType, pickToppin);

    $("#showResults").show()
    $("#showPizza").text(newPizza.pizza);
    $("#showIngre").text(newPizza.type);
    $("#showToppin").text(newPizza.toppin);
  });
});
