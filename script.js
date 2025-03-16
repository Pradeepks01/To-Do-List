document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.textContent = taskText;
    li.className = "flex justify-between items-center p-2 border-b border-gray-300"; // Tailwind classes for styling

    li.addEventListener('click', function () {
        li.classList.toggle('line-through');
        li.classList.toggle('text-gray-500');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = "bg-red-500 text-white p-1 rounded hover:bg-red-600"; // Tailwind classes for styling
    deleteButton.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent the click event from bubbling up to the li
        taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
    
    // Show alert when a new task is created
    alert(`Task added: "${taskText}"`);

    // Clear the input field
    taskInput.value = '';
}