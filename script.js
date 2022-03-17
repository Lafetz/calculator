let inputs=[];
let numbers='';
let secondTime=false;
const buttons=document.querySelectorAll('button');
const upperScreen=document.querySelector('.top');
const downScreen=document.querySelector('.down');
 buttons.forEach(button => {
                       button.addEventListener('click',()=>{
                        let buttonContent=button.textContent;
                         let classname=button.className;
                         if(classname=='number') numbers+=buttonContent;
                         
                         else if(classname=='operator'){ 
                                  inputs.push(numbers);
                                  inputs.push(buttonContent);
                                  numbers='';
                                  console.log(inputs);
                                  if(inputs.length==4){
                                    inputs[0]=operation(inputs[0],inputs[1],inputs[2]);
                                    inputs.splice(1,2)
                                    console.log(inputs)
                          }
                                  console.log(inputs);
                                 
                         }
                       })                 
 });
    






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

