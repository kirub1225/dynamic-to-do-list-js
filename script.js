// Ensure the DOM is fully loaded before running any JS
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and clean the input

        // Alert if input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new <li> and set its textContent to taskText
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');  // Use classList.add here

        // When the button is clicked, remove the <li>
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the button to the <li>
        li.appendChild(removeBtn);

        // Append the <li> to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Call addTask when button is clicked
    addButton.addEventListener('click', addTask);

    // Call addTask when Enter key is pressed inside the input
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
