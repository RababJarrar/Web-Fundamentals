function l(element){
    alert("I love You");
}
function m(element){
   element.remove();
}

function ad(element){
element.classList.add("shadow") ;
}

var pizza={
    bread:"normal",
    cheese:"swiss",
};
console.log(pizza);
console.log(---------------------------------------------------------------------------------);
function factory(bread,cheese,protein){
    var pizza={
    bread:"normal",
    cheese:"swiss",
    protein:"none" 
    };
    return pizza; 
}
var m= factory("normal","yallow","pp");
console.log(m)
