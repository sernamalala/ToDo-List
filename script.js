let form = document.getElementById("form");
let input = document.getElementById("input");
let message = document.getElementById("message-user");
let tasks = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Button is clicked");
    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        message.innerHTML = " Post cannot be blank!";
        console.log("Invalid input: failure");
    } else {
        message.innerHTML = "Task Saved.";
        acceptData();
    }
};

let acceptData = () => {
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("tasks-saved");

    // Create a task description input
    let taskDescription = document.createElement("input");
    taskDescription.type = "text";
    taskDescription.value = input.value;
    taskDescription.disabled = true;

    // Create edit and delete icons
    let editIcon = document.createElement("i");
    editIcon.classList.add("fa-regular", "fa-pen-to-square", "icon");
    editIcon.addEventListener("click", function () {
        taskDescription.disabled = false;
        taskDescription.focus();
    });

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash", "icon");
    deleteIcon.addEventListener("click", function () {
        taskContainer.remove();
    });

    // Append elements to task container
    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(editIcon);
    taskContainer.appendChild(deleteIcon);

    // Append the new task container to the task list
    tasks.appendChild(taskContainer);

    // Clear the input field
    input.value = "";
};

