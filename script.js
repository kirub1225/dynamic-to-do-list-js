// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // 🔹 Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 🔹 Function to add a task
    function addTask() {
        // Get the input value and trim whitespace
        const taskText = taskInput.value.trim();

        // Check if task is empty
        if (taskText === '') {
            alert("Please enter a task.");
            return;
        }

        // 🔸 Create <li> and set text
        const li = document.createElement('li');
        li.textContent = taskText;

        // 🔸 Create "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // 🔸 Set onclick handler to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // 🔸 Append button to <li>, then <li> to <ul>
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // 🔸 Clear input field
        taskInput.value = '';
    }

    // 🔹 Add click event to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // 🔹 Add keypress event to input (Enter key support)
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
