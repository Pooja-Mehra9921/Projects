document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const addTaskBtn = document.getElementById("addTaskBtn");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            createTaskElement(task.text, task.completed, index);
        });
    }

    function createTaskElement(text, completed, index) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item"); // Add class for styling
        taskItem.innerHTML = `
            <input type="checkbox" ${completed ? "checked" : ""} data-index="${index}">
            <span class="${completed ? "completed" : ""}">${text}</span>
            <button class="delete-btn" data-index="${index}">🗑</button>
        `;

        taskList.appendChild(taskItem);

        // Event Listeners
        taskItem.querySelector("input").addEventListener("change", toggleTask);
        taskItem.querySelector(".delete-btn").addEventListener("click", deleteTask);
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        tasks.push({ text: taskText, completed: false });
        saveTasks();
        loadTasks();
        taskInput.value = "";
    }

    function toggleTask(event) {
        const index = event.target.dataset.index;
        tasks[index].completed = event.target.checked;
        saveTasks();
        loadTasks();
    }

    function deleteTask(event) {
        const index = event.target.dataset.index;
        tasks.splice(index, 1);
        saveTasks();
        loadTasks();
    }

    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") addTask();
    });

    addTaskBtn.addEventListener("click", addTask);

    loadTasks();
});
