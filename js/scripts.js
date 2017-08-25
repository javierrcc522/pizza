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
