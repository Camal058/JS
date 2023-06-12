var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {
    var taskText = taskInput.value;

    if (taskText) {
        var newTask = document.createElement("li");
        newTask.innerText = taskText;

        taskList.appendChild(newTask);
        taskInput.value = "";
    }
});