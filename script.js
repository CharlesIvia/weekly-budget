//Fetch dom elements and set variables

const enterBudget = document.querySelector("#enter-budget");
const firstForm = document.querySelector("#first-form");
const expenseName = document.querySelector("#name");
const expenseAmount = document.querySelector("#amount");
const secondForm = document.querySelector("#second-form");
const myBudget = document.querySelector("#budget-info");
const amountLeft = document.querySelector("#budget-info-two");
const expenseList = document.querySelector("#list");
const firstMessage = document.querySelector("#first-message");
const addBtn = document.querySelector("#second-btn");
let budget;

//Event listeners

window.addEventListener("load", () => {
  enterBudget.focus();
});

firstForm.addEventListener("submit", init);
secondForm.addEventListener("submit", addExpense);

//Helper functions

function init(e) {
  e.preventDefault();
  budget = enterBudget.value;

  if (budget !== "") {
    enableForm();
    expenseName.focus();
    myBudget.textContent = budget;
    amountLeft.textContent = budget;
  } else {
    firstMessage.textContent = "This field can't be empty!";

    setTimeout(() => {
      firstMessage.style.display = "none";
    }, 2000);
  }
}

//Enable form

function enableForm() {
  expenseName.disabled = false;
  expenseAmount.disabled = false;
  addBtn.disabled = false;
  firstForm.parentElement.style.display = "none";
}

//Add expense on add button click

function addExpense(e) {
  e.preventDefault();
  let name = expenseName.value;
  let amount = expenseAmount.value;
  secondForm.reset();
  expenseName.focus();
  addToList(name, amount);
  updateBudget(amount);
}

//Add to list functionality

function addToList(item, value) {
  if (item != "" && value != "") {
    let li = document.createElement("li");
    let span = document.createElement("span");
    li.className = "list-item";
    span.className = "badge";
    span.textContent = value;
    li.textContent = item;
    li.appendChild(span);
    expenseList.appendChild(li);
  }
}

//Update budget amount after adding an item

function updateBudget(expense) {
  let total = budget - expense;
  budget = total;
  amountLeft.textContent = budget;
  checkBudget(budget);
}
