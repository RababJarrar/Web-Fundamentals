var display = document.getElementById("display");
          //console.log(display.innerText);
var number1 ="";
var number2;
var op;
var result ; 

function clr(){
    display.innerText=0 
     number1 =""
     number2 ="" 
    op =""
}

function press(number){
    if (display.innerText==0){
        display.innerText="" 
    }
    number1=number1+number
    display.innerText=number1
        //console.log(number1)   
}

function setOP(key){
    op=key
       //console.log(op)
    number2=number1
    console.log(number2)
    number1=""
    console.log(number1)
}


function calculate(){
    var a= parseFloat(number2)
    var b= parseFloat(number1)
   if(op=='/'){
        result=a/b
    }
    if(op=='+'){
        result=a+b
    }
    if(op=='-'){
        result=a-b
    }
    if(op=='*'){
        result=a*b
    }
   display.innerText=result
}
