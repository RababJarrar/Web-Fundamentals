var element = document.getElementById("display");

function press(content){
    if (element.innerText==0){
        element.innerText="" 
    }
    element.innerText+=content
}

function clr(){
    element.innerText=0
    
}