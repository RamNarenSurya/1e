let outputEl=document.getElementById("output");
function button1(){
    outputEl.textContent = "You clicked button1";
    outputEl.style.color = "red";
}

let button2 = function(){
    outputEl.textContent = "You clicked button2";
    outputEl.style.color = "blue";
}

let button3 = () =>{
    outputEl.textContent = "You clicked button3";
    outputEl.style.color = "green";
}
