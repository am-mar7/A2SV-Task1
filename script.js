const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return alert("Please enter a task!");

    const li = document.createElement("li");
    li.textContent = taskText;

    
    li.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = "";
});

// Optional: Press Enter to add task
taskInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") addTaskBtn.click();
});
