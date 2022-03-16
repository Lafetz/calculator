let current='';
let previous='';
let operator='';
let total=0;
let down=document.querySelector('.bottom')
let secondOperation=true;
const buttons=document.querySelectorAll('button');
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
             let content=button.textContent;
             let contentType=parseInt(content)
             if(!isNaN(contentType)&&secondOperation){
                 current+=content;
          
             }
            else if(isNaN(contentType)&&secondOperation){
                      operator=content;
                      previous=current;
                      current='';       
                      secondOperation=false;        
                      console.log('second if')
                
                      console.log(operator)        
             }
           
            else {
                current+=content
                if(isNaN(contentType)) {
                 console.log('else')
                      
                      console.log(current);
                   
                       total=operation(previous,operator,current);
                       secondOperation=true;
                       console.log(total)
                }
                       
            }
    } 
)})

    


function operation(a,b,c){
    let answer=0;
    a=parseInt(a);
    c=parseInt(c);
    if(b=='+') answer= add(a,c);
    else if(b=='-') answer= subtract(a,c)
    else if(b=='*') answer= multiply(a,c);
    else if(b=="/") answer =divide(a,c);
    else return 'ERROR on function operator'
    
    return answer;
}

function add(a,b){
 
    return a+b;
}
function multiply(a,b){
    return a+b;
}
function divide(a,b){
    return a/b;
}
function subtract(a,b){
    return a-b;
}

