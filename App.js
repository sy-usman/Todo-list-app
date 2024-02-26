const input = document.getElementById("input");
const items = document.getElementById("items-list");

function addtask() {
  if (input.value === " ") {
    alert("bhai pahlai box ma to kch daal!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    items.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  browserdata();
}

items.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("stats");
      browserdata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      browserdata();
    }
  },
  false
);

function browserdata() {
  localStorage.setItem("data", items.innerHTML);
}
function lishow() {
  items.innerHTML = localStorage.getItem("data");
}

lishow();
