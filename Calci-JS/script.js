

var String =" ";
var buttons = document.querySelectorAll('button');


Array.from(buttons).forEach((button) =>{
    button.addEventListener('click' , (e) =>{
        console.log(e.target);


        if(e.target.innerHTML  == '='){
          String = eval(String);
          document.querySelector('input').value = String; 
        }
        else if(e.target.innerHTML == 'AC'){
            String =" ";
            document.querySelector('input').value = String;
        }

        else{
            String = String + e.target.innerHTML;
            document.querySelector('input').value = String;
        }
       
    })
})









