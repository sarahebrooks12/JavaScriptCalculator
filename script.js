// Create a calculator that only does addition.

// The calculator should have two number inputs and a button that says "Add".
// When the user clicks the "Add" button, the sum of the two numbers they entered into the inputs should be printed to the DOM below the calculator and the inputs should be cleared. You may need to convert strings to numbers to make this work.

// const answer = document.querySelector("#equals");

// document.querySelector("#add").addEventListener("click", function () {
//   if (event.target.id === "add") {
//     console.log("This is add");
//     let integer1 = parseInt(document.querySelector("#integer1").value);
//     let integer2 = parseInt(document.querySelector("#integer2").value);
//     answer.innerHTML = integer1 + integer2;
//   }
// });
// document.querySelector("#subtract").addEventListener("click", function () {
//   if (event.target.id === "subtract") {
//     console.log("This is subtract");
//     let integer1 = parseInt(document.querySelector("#integer1").value);
//     let integer2 = parseInt(document.querySelector("#integer2").value);
//     answer.innerHTML = integer1 - integer2;
//   }
// });
// document.querySelector("#multiply").addEventListener("click", function () {
//     if (event.target.id === "multiply") {
//       console.log("This is multiply");
//       let integer1 = parseInt(document.querySelector("#integer1").value);
//       let integer2 = parseInt(document.querySelector("#integer2").value);
//       answer.innerHTML = integer1 * integer2;
//     }
//   });
//   document.querySelector("#divide").addEventListener("click", function () {
//     if (event.target.id === "divide") {
//       console.log("This is divide");
//       let integer1 = parseInt(document.querySelector("#integer1").value);
//       let integer2 = parseInt(document.querySelector("#integer2").value);
//       answer.innerHTML = integer1 / integer2;
//     }
//   });
//   Refactor your app so that, instead of using number inputs, make a button for the numbers 0 through 9 like you would see on the calculator app on your phone. When the user clicks one of the number buttons or one of the mathematical symbol buttons, that number or symbol should appear in the "equation" field at the top of your calculator.
//   Users should be able to enter more complex equations with more than two operands. (For example, they should be able to enter 2 + 2 x 2.) When the user clicks an = button, they should see the result of their equation printed to the DOM.
