const addBtn = document.getElementById("addBtn");
const input = document.getElementById("newTask");
const myList = document.querySelector(".myTaskList");
const checked = document.querySelector(".doneList");

function saveList(inputValue) {
    const li = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox"
    li.appendChild(checkBox);
    // li.classList.add("dailyList");
    console.log(li)
    li.innerText = inputValue;

    myList.appendChild(li);
}
addBtn.addEventListener(("click"), (e) => {
    e.preventDefault();
    saveList(input.value);
    input.value = "";
});















