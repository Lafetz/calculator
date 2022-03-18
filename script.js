let inputs=[];
let numbers='';
let previous='';
let secondTime=false;
let fof=true;
const buttons=document.querySelectorAll('button');
const downScreen=document.querySelector('.bottom');
 buttons.forEach(button => {
                       button.addEventListener('click',()=>{
                        let buttonContent=button.textContent;
                         let classname=button.className;
                         console.log(buttonContent)
                         if(classname=='number'||classname=='dot') {
                             numbers+=buttonContent;
                            downScreen.textContent= `${previous}${numbers}`
                         }
                        if(classname=='delete'){
                            if(inputs.length==2&&numbers!=''){
                                numbers=numbers.slice(0,numbers.length-1);
                                downScreen.textContent=`${inputs[0]}${inputs[1]}${numbers}`;
                            }
                                                        
                         }          
                        
                        if(classname=='equal'){
                                           previous=operation(inputs[0],inputs[1],numbers);
                                               
                                               downScreen.textContent=previous;
                        }
                        
                        if(classname=='clear'){
                            clear();
                             
                        }
                         else if(classname=='operator'){ 
                            if(numbers!='') inputs.push(numbers);
                            
                            if(inputs[1]!=('+'||'-'||'*'||'/')||numbers.length>0){
                                inputs.push(buttonContent);
                                  downScreen.textContent=`${numbers}${buttonContent}`;
                                  numbers='';
                                previous=downScreen.textContent;
                                  if(inputs.length==4){
                                    inputs[0]=operation(inputs[0],inputs[1],inputs[2]);
                                    inputs.splice(1,2)
                                  secondTime=true;
                                    numbers=''
                                    previous=`${inputs[0]}${buttonContent}`;
                                    downScreen.textContent=`${inputs[0]}${buttonContent}`;
                                 }
                                }
                         }
                        
                         } )             
                            
 });    
function clear(){
    inputs=[];
    numbers='';
    previous='';
    downScreen.textContent='';
    
}     

function operation(a,b,c){
    let answer=0;
    a=parseFloat(a);
    c=parseFloat(c);
    if(b=="/"&&c=="0") return'ERROR'
    if(b=='+') answer= add(a,c);
    else if(b=='-') answer= subtract(a,c)
    else if(b=='*') answer= multiply(a,c);
    else if(b=="/") answer =divide(a,c);
    else return 'ERROR'
    
    return answer;
}

function add(a,b){
 
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function subtract(a,b){
    return a-b;
}

