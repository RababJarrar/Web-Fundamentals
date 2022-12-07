function l(){
    alert("I love You");
}
function m(element){
   element.remove();
}

function ad(element){
element.classList.add("shadow") ;
}
function example(element) {
    console.log("element clicked", element);
}
function chooseLunch(element) {
    console.log(element)
    //alert("You picked " + element.value);
}
function setName(element){
    var x= document.querySelector("#name-tag")
    x.innerText=element.value
}


// var pizza={
//    bread:"normal",
 //   cheese:"swiss",
//};
//console.log(pizza);
//console.log(---------------------------------------------------------------------------------);
//function factory(bread,cheese,protein){
    //var pizza={
   // bread:"normal",
   // cheese:"swiss",
  //  protein:"none" 
  //  };
   // return pizza; 
//}
//var m= factory("normal","yallow","pp");
//console.log(m)
