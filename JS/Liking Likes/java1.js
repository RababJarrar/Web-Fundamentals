
    var count =3;
    var countElement = document.querySelector("#count");
    console.log(countElement); 
     
    function add1() {
        console.log(count); 
        count ++;
        countElement.innerText = count +" like(s)";
        console.log(count);    
    }