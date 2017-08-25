//bussiness logic
function Orderpizza(pizza, ingredients, price) {
  this.pizza = pizza;
  this.ingredients = ingredients;
  this.price = price;

}
//user-interface logic
$(document).ready(function() {
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();
    var pickPizza = $("#sizePizza").val()
    var pickCheese = $("#cheese").val()
    var pickHam = $("#ham").val()
    var pickArtichoke = $("#artichoke").val()
    var pickMeats = $("#meats").val()
  });
});
