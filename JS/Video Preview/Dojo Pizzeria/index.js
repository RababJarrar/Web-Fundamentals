function PizzaOven (crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = PizzaOven("deep dish", "traditional","mozarella", ["pepperoni" , "sausage"]);
var pizza2 = PizzaOven("hand tossed", "marinara",["mozarella" , "feta"], ["mushrooms","olives","onions"]);
console.log(pizza1);
console.log(pizza2);
var pizza3 = PizzaOven("hand tossed", "traditional","mozarella","tomatoes",);
var pizza4 = PizzaOven("deep dish", "traditional","mozarella", "mushrooms");
console.log(pizza3);
console.log(pizza4);