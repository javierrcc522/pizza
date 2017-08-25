//bussiness logic
function Orderpizza(pizza, type, toppin) {
  this.pizza = pizza;
  this.type = type
  this.toppin = toppin;
};

Orderpizza.prototype.moneyPizza = function () {
  if (this.pizza === "Large") {
    return 15;
  } else if (this.pizza === "Medium") {
    return 10;
  } else {
    return 7;
  };
};

Orderpizza.prototype.moneyType = function () {
  if (this.type === "organic"){
    return 5;
  } else {
    return 0;
  };
};

Orderpizza.prototype.moneyToppin = function () {
  if (this.toppin === "cheese") {
    return 3
  }
  else if (this.toppin === "ham") {
    return 4
  } else {
    return 5
  };
};

Orderpizza.prototype.finalPrice = function () {
  return 0 + this.moneyPizza() + this.moneyType() + this.moneyToppin()

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
    $("#showPrice").text(newPizza.finalPrice());
  });
});
