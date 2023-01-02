// Task 1: Define an array to store our expenses
var expenses = [];

// Task 2: Define a function to add expense
function addExpense() {
  // Get the values from input fields
  var amount = document.getElementById("expenseAmount").value;
  var desc = document.getElementById("description").value;
  var category = document.getElementById("category").value;

  // Create a expense object
  var expense = {
    amount: amount,
    desc: desc,
    category: category,
  };

  // Add the expense object to our array
  expenses.push(expense);

  // Store the expenses in localStorage
  localStorage.setItem("expenses", JSON.stringify(expenses));

  // Clear the input fields
  document.getElementById("expenseAmount").value = "";
  document.getElementById("description").value = "";
  document.getElementById("category").value = "";

  // Call showExpenses
  showExpenses();
}

// Task 3: Define a function to show expenses
function showExpenses() {
  // Get the expenses from localStorage
  if (localStorage.getItem("expenses") != null) {
    expenses = JSON.parse(localStorage.getItem("expenses"));
  }

  // Get the expenseList ul
  var expenseList = document.getElementById("expenseList");

  // Set the innerHTML to blank
  expenseList.innerHTML = "";

  // Loop through expenses
  for (var i = 0; i < expenses.length; i++) {
    var amount = expenses[i].amount;
    var desc = expenses[i].desc;
    var category = expenses[i].category;

    expenseList.innerHTML +=
      '<li class="list-group-item">' +
      '<div class="row">' +
      '<div class="col-md-3">' +
      amount +
      "</div>" +
      '<div class="col-md-3">' +
      desc +
      "</div>" +
      '<div class="col-md-3">' +
      category +
      "</div>" +
      '<div class="col-md-3">' +
      '<button class="btn btn-primary" onclick="editExpense(' +
      i +
      ')">Edit</button>' +
      '<button class="btn btn-danger" onclick="deleteExpense(' +
      i +
      ')">Delete</button>' +
      "</div>" +
      "</div>" +
      "</li>";
  }
}

// Task 4: Define a function to delete an expense
function deleteExpense(index) {
  // Delete the expense from the expenses array
  expenses.splice(index, 1);

  // Update the localStorage
  localStorage.setItem("expenses", JSON.stringify(expenses));

  // Call showExpenses
  showExpenses();
}

// Task 5: Define a function to edit an expense
function editExpense(index) {
  // Get the expense from the array
  var expense = expenses[index];

  // Set the values to the input fields
  document.getElementById("expenseAmount").value = expense.amount;
  document.getElementById("description").value = expense.desc;
  document.getElementById("category").value = expense.category;

  // Delete the expense from the array
  expenses.splice(index, 1);

  // Update the localStorage
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Call the showExpenses function
showExpenses();
