let tasks = [];
let editingId = null;


document.getElementById('addBtn').addEventListener('click', addTask);


document.getElementById('taskInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);
    input.value = '';

    renderTasks();
}

function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    }
}

function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

function startEdit(id) {
    editingId = id;
    renderTasks();
}

function saveEdit(id) {
    const input = document.querySelector(`#edit-${id}`);
    const newText = input.value.trim();

    if (newText === '') {
        alert('Task cannot be empty!');
        return;
    }

    const task = tasks.find(task => task.id === id);
    if (task) {
        task.text = newText;
        editingId = null;
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <p>No tasks yet! Add one to get started.</p>
            </div>
        `;
    } else {
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;

            if (editingId === task.id) {
                li.innerHTML = `
                    <input type="text" class="edit-input" id="edit-${task.id}" value="${task.text}" />
                    <button class="save-btn" onclick="saveEdit(${task.id})">Save</button>
                `;
            } else {
                li.innerHTML = `
                    <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})" />
                    <span class="task-text">${task.text}</span>
                    <div class="task-actions">
                        <button class="edit-btn" onclick="startEdit(${task.id})">Edit</button>
                        <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
                    </div>
                `;
            }

            taskList.appendChild(li);
        });
    }

    updateStats();
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;

    document.getElementById('totalTasks').textContent = total;
    document.getElementById('completedTasks').textContent = completed;
    document.getElementById('pendingTasks').textContent = pending;
}




