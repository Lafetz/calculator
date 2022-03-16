let previous='';
let current=0;
let total=0;
let down=document.querySelector('.bottom')
const buttons=document.querySelectorAll('button');
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
             let content=button.textContent;
            previous+=content;
            down.textContent=previous;
            evaluate(previous);
    } 
)})

    


function operator(a,b,c){
    let answer=0;
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