const addBtn = document.getElementById("addBtn");
let input = document.getElementById("newTask");
let myTask = document.getElementById("myTask");
let createForm = document.getElementById("createForm");

const fruits = ["apple", "mango"];

function addTaskDetails(inputValue) {
    fruits.push(inputValue);
    console.log(fruits);
    myTask.innerHTML = inputValue;
}

createForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(createForm.elements["taskTypeDaily"].checked);
    console.log(createForm.elements["taskTypeMyTask"].checked);
    addTaskDetails(input.value);
})











