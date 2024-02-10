const input= document.getElementById("input");
const items= document.getElementById("items-list");

function addtask(){
    if(input.value === ''){
        alert("bhai pahlai box ma to kch daal!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        items.appendChild(li);
    }
}