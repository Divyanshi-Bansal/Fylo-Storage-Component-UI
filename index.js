var color = document.getElementById("color");
var data = document.getElementById("data-used");
function increaseFull(){
    color.style.width = "100%";
    data.innerHTML = "1000 GB"; 
}

function increaseHalf(){
    color.style.width = "50%";
    data.innerHTML = "500 GB"; 
}

function Empty(){
    color.style.width = "0%";
    data.innerHTML = "0 GB"; 
}