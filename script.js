// Ensure the DOM is fully loaded before running any JS
document.addEventListener('DOMContentLoaded', function () {
    // Step 1: Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 2: Define the addTask function
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and clean the task input

        // Step 3: Check for empty input
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Step 4: Create <li> element and set its text
        const li = document.createElement('li');

        // Create a text node separately to avoid replacing text when adding button
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Step 5: Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Step 6: Add event listener to remove the task
        removeBtn.addEventListener('click', function () {
            taskList.removeChild(li);
        });

        // Step 7: Append text and button to the <li>
        li.appendChild(taskSpan);
        li.appendChild(removeBtn);

        // Step 8: Append <li> to the task list
        taskList.appendChild(li);

        // Step 9: Clear the input field
        taskInput.value = '';
    }

    // Step 10: Add task on button click
    addButton.addEventListener('click', addTask);

    // Step 11: Add task on pressing Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
