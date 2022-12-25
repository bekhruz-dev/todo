const input = document.querySelector("input");
const btn = document.querySelector(".btn");
const todoVal = document.querySelector(".todo_value");

btn.addEventListener("click", () => {});

function delValue() {
  const delBtn = document.querySelectorAll(".del");
  const todoValuee = document.querySelectorAll(".value");

  delBtn.forEach((item, idx) => {
    item.addEventListener("click", () => {
      todoValuee[idx].remove();
    });
  });
}

function addCard() {
  let searchVal = input.value;

  if (searchVal === "") {
    alert("Что то напишите !");
  } else {
    input.value = "";
  }

  const newCard = document.createElement("div");
  newCard.classList.add("value");
  newCard.innerHTML = `
    <div class="newDiv">
    <h1 class="h1_searchVal">${searchVal}</h1>
    <hr class="hr_searchVal">
    <button class="del"><img src="./logo.svg" alt="logo.svg"></button>
  </div> 
      
  
    `;

  todoVal.appendChild(newCard);

  const h1 = document.querySelectorAll(".h1_searchVal");

  console.log(h1);

  h1.forEach((item, idx) => {
    item.addEventListener("click", () => {
      item.classList.toggle("<del>h1_searchVal</del>");
    });
  });
}
