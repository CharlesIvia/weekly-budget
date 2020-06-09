//Fetch dom elements and set variables

const enterBudget = document.querySelector("#enter-budget");
const firstForm = document.querySelector("#first-form");
const expenseName = document.querySelector("#name");
const expenseAmount = document.querySelector("#amount");
const secondForm = document.querySelector("#second-form");
const myBudget = document.querySelector("#budget-info");
const amountLeft = document.querySelector("#budget-info-two");
const expenseList = document.querySelector("#list");
let budget;

//Event listeners

window.addEventListener("load", () => {
  enterBudget.focus();
});

firstForm.addEventListener("submit", init);
secondForm.addEventListener("submit", addExpense);
