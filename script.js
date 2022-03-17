let inputs=[];
let numbers='';
let previous='';
let secondTime=false;
let fof=true;
const buttons=document.querySelectorAll('button');
const upperScreen=document.querySelector('.top');
const downScreen=document.querySelector('.bottom');
 buttons.forEach(button => {
                       button.addEventListener('click',()=>{
                        let buttonContent=button.textContent;
                         let classname=button.className;
                         console.log(buttonContent)
                         if(classname=='number'||classname=='dot') {
                             numbers+=buttonContent;
                            
                              if(fof) downScreen.textContent=`${numbers}`;
                            if(!fof){
                                downScreen.textContent=`${downScreen.textContent}${buttonContent}`
                                fof=true;
                            }
                            }
                        if(classname=='delete'){
                            if(inputs.length==2&&numbers!=''){
                                numbers=numbers.slice(0,numbers.length-1);
                                downScreen.textContent=`${inputs[0]}${inputs[1]}${numbers}`;
                                console.log(inputs);
                            }
                            else if (inputs.length==2&&!secondTime){
                                inputs.splice(1)
                                console.log(inputs);
                                downScreen.textContent=inputs[0]
                                
                              
                            
                            }
                             
                            
                         }
                                
                        
                        if(classname=='equal'){
                                           if(inputs.length==2&&numbers!=''){
                                               upperScreen.textContent=operation(inputs[0],inputs[1],numbers);
                                               secondTime=true;
                                               downScreen.textContent='';
                                           }
                                           else {
                                            upperScreen.textContent=inputs[0];
                                            downScreen.textContent='';
                                        }
                                           }
                        
                        if(classname=='clear'){
                            clear();
                             
                        }
                         else if(classname=='operator'){ 
                            if(numbers!='') inputs.push(numbers);
                            
                                 
                                  inputs.push(buttonContent);
                               
                                  downScreen.textContent=`${downScreen.textContent}${buttonContent}`;
                                  fof=false;
                                  numbers='';
                                
                                  console.log(inputs);
                                  if(inputs.length==4){
                                    inputs[0]=operation(inputs[0],inputs[1],inputs[2]);
                                    inputs.splice(1,2)
                                    console.log(inputs)
                                    upperScreen.textContent=`${inputs[0]}${inputs[1]}`;
                                  secondTime=true;
                                    numbers=''
                                    previous='';
                                    downScreen.textContent='';
                                 }
                                }
                       })               
                          
                                 // console.log(inputs);
                                 
                                
 });
    



function clear(){
    inputs=[];
    numbers='';
    previous='';
    downScreen.textContent='';
    upperScreen.textContent='';
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

