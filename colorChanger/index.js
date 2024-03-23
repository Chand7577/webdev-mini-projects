

var buttons=document.querySelectorAll(".button");
var body=document.querySelector('body');

  
    buttons.forEach(function(button){
        button.addEventListener('click',(event)=>{
            let color=event.target.id;
            if(color=='grey'){
                body.style.backgroundColor='grey';
            }
            else if(color=='white'){
                body.style.backgroundColor='white';
            }
            else if(color=='yellow'){
                body.style.backgroundColor='yellow';
            }
            else{
                body.style.backgroundColor='blue';
            }
       });
       
    })


   
