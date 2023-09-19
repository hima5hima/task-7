const tasks = [];

function addTask() 
{
  const taskInput = document.getElementById('taskInput');
  const taskName = taskInput.value.trim();

  if (taskName !== '') 
  {
    const newTask = {
      name: taskName,
      status: 'not done'
    };

    tasks.push(newTask);
    displayTasks();
    taskInput.value = '';
  }
}

function toggleTaskStatus(index) 
{
  if (tasks[index].status === 'not done') 
  {
    tasks[index].status = 'done';
  } 
  else 
  {
    tasks[index].status = 'not done';
  }

  displayTasks();
}

function deleteTask(index) 
{
  tasks.splice(index, 1);
  displayTasks();
}

function displayTasks() 
{
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.name;

    if (task.status === 'done') 
    {
      li.classList.add('done');
    }

    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('icons');

    const toggleButton = document.createElement('button');
    toggleButton.classList.add('toggle-button');
    toggleButton.innerHTML = '&#10004;'; // Checkmark icon
    toggleButton.onclick = () => toggleTaskStatus(index);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '&times;'; // X icon
    deleteButton.onclick = () => deleteTask(index);

    iconsDiv.appendChild(toggleButton);
    iconsDiv.appendChild(deleteButton);

    li.appendChild(iconsDiv);
    taskList.appendChild(li);
  });
}
