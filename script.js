// Wait until the entire page is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select key elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // get and clean the input

        // Check if the input is empty
        if (taskText === '') {
            alert("Please enter a task.");
            return;
        }

        // Create the task list item (li)
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Remove the task when button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Add button to the task item and then task item to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task when pressing Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
