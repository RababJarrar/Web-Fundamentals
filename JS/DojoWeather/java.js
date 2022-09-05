function city(element){
    alert ("Loading weather report...");
}
function di(){
    var message= document.querySelector("#cookiemessage");
    message.remove();
}

                            
function temp(x){          //temp(value)
                           //console.log(x)
      if(x=="feh"){
            for (var i=1; i<9; i++){
                var c= document.querySelector("#number"+i)
                           // console.log(c)
                c.innerText=( Math.round((c.innerText)*9/5)+32)
            }  
      }
    else{
            for (var i=1; i<9; i++){
              var f= document.querySelector("#number"+i)
                          //console.log(f)
              f.innerText=( Math.round(((f.innerText)-32)*(5/9)))
            }
        }
  }




    