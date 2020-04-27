createButton = (idNumber, integer) => {
    // console.log(idNumber)
    // console.log(integer)
  return `
    <button id="${idNumber}">${integer}</button> <br> `;
};
for (let i = 0; i <= 9; i++) {
  document.querySelector("#calculator").innerHTML += createButton(i, i);
}

createClick = () => {
 if (event.target.id === i)
 for (let a = 0; a <=9; a++){
let intValue = document.querySelector(i).value}
document.querySelector("#calculator").addEventListener("click", function () {
})
console.log(hello)}
// document.querySelector("#subtract").addEventListener("click", function () {
//   if (event.target.id === "subtract") {
//     console.log("This is subtract");
//     let integer1 = parseInt(document.querySelector("#integer1").value);
//     let integer2 = parseInt(document.querySelector("#integer2").value);
//     answer.innerHTML = integer1 - integer2;
//   }
// });

// create buttons for multiply, divide, addition, subtraction, and equals
