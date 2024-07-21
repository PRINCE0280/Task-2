// Function to calculate age
function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    if (birthdate) {
        const birthDateObj = new Date(birthdate);
        const today = new Date();
        let age = today.getFullYear() - birthDateObj.getFullYear();
        const monthDifference = today.getMonth() - birthDateObj.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
            age--;
        }

        document.getElementById('age-result').textContent = `You are ${age} years old.`;
    } else {
        document.getElementById('age-result').textContent = 'Please enter a valid birthdate.';
    }
}

// Function to add a task to the to-do list
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('tasks');
        const taskItem = document.createElement('li');

        taskItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
}
