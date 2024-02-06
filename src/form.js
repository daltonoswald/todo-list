import { format } from 'date-fns';
import { createTask, createProject, } from './taskUI.js'

class Task {
    constructor(id, title, description, dueDate, priority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

let taskList = [];
let idCount;

// let idCount = taskList.length +1;
// const makeProject = new Task(idCount, 'Make Project', 'Complete TOP Todo List', new Date((2023, 9, 1),'MM/dd/yyyy'), 'Medium');
// taskList.push(makeProject);
// createTask(idCount, 'Make Project', 'Complete TOP Todo List', format(new Date(2025, 10, 1), 'MM/dd/yyyy'), 'Medium');

// idCount = taskList.length +1;
// const addTasks =  new Task(idCount, 'Add Tasks', 'Add and complete some tasks to the list', new Date(2023, 7, 25), 'Low');
// taskList.push(addTasks);
// createTask(idCount, 'Add Tasks', 'Add and complete some tasks to the list', format(new Date(2023, 7, 25), 'MM/dd/yyyy'), 'Low')

// let container;

function createForm(e) {
    // container = document.getElementById('container');
    const newForm  = document.createElement('form');
    newForm.classList.add('newForm');
    newForm.setAttribute('id', 'newForm');

    let titleRow = document.createElement('div');
    titleRow.classList.add('titleRow');
    newForm.appendChild(titleRow);

    let titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Task';
    titleRow.appendChild(titleLabel);

    let titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('required', '');
    titleRow.appendChild(titleInput);

    let descriptionRow = document.createElement('div');
    descriptionRow.classList.add('descriptionRow');
    newForm.appendChild(descriptionRow);

    let descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.textContent = 'Description';
    descriptionRow.appendChild(descriptionLabel);

    let descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('id', 'description');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.setAttribute('placeholder', 'optional');
    descriptionRow.appendChild(descriptionInput);

    let dueDateRow = document.createElement('div');
    dueDateRow.classList.add('dueDateRow');
    newForm.appendChild(dueDateRow);

    let dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'dueDate');
    dueDateLabel.textContent = 'Due Date';
    dueDateRow.appendChild(dueDateLabel);

    let dueDateInput = document.createElement('input');
    dueDateInput.addEventListener('click', () => {console.log(dueDateInput.value)});
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('id', 'dueDate');
    dueDateInput.setAttribute('name', 'dueDate');
    dueDateInput.setAttribute('required', '');
    dueDateRow.appendChild(dueDateInput);

    let priorityRow = document.createElement('div');
    priorityRow.classList.add('priorityRow');
    newForm.appendChild(priorityRow);

    let priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.textContent = 'Priority';
    priorityRow.appendChild(priorityLabel);

    let priorityInput = document.createElement('select');
    priorityInput.setAttribute('id', 'priority');
    priorityInput.setAttribute('name', 'priority');

    let optionLow = document.createElement('option');
    optionLow.text = 'Low';
    priorityInput.add(optionLow, priorityRow[1]);

    let optionMedium = document.createElement('option');
    optionMedium.text = 'Medium';
    priorityInput.add(optionMedium, priorityRow[2]);

    let optionHigh = document.createElement('option');
    optionHigh.text = 'High';
    priorityInput.add(optionHigh, priorityRow[3]);

    priorityRow.appendChild(priorityInput);

    let submitRow = document.createElement('div');
    submitRow.classList.add('submitRow');
    newForm.appendChild(submitRow);

    let submitInput = document.createElement('input');
    submitInput.setAttribute('type', 'submit');
    submitRow.appendChild(submitInput);

    let submitCancel = document.createElement('button');
    submitCancel.classList.add('taskCancel');
    submitCancel.setAttribute('type', 'button');
    submitCancel.textContent = 'Cancel';
    submitCancel.addEventListener('click', clearTaskForm);
    submitRow.appendChild(submitCancel);


    e.target.parentElement.parentElement.parentElement.appendChild(newForm);

    newForm.onsubmit= addTask
    // newForm.onsubmit= document.querySelectorAll('.newTaskBtn').forEach(e => e.disabled = false);
    console.log('Hello from form.js');
    // document.getElementById('newTaskBtn').disabled = true;
    document.querySelectorAll('.newTaskBtn').forEach(e => e.disabled = true);
    document.getElementById('newProjectBtn').disabled = true;
}


function addTask (e) {
    e.preventDefault();
    idCount++;
    let titleText = document.querySelector('#title');
    let descriptionText = document.querySelector('#description');
    let dueDateText = document.querySelector('#dueDate');
    let priorityText = document.querySelector('#priority');
    console.log(new Date(dueDateText.value));
    // const newTask = new Task((idCount), titleText.value, descriptionText.value, new Date(dueDateText.value), priorityText.value);
    const newTask = new Task((idCount), titleText.value, descriptionText.value, dueDateText.value, priorityText.value);
    taskList.push(newTask);
    // createTask((idCount), titleText.value, descriptionText.value, new Date(dueDateText.value), priorityText.value, e);
    createTask((idCount), titleText.value, descriptionText.value, dueDateText.value, priorityText.value, e);
    console.log(taskList);
    document.getElementById('newTaskBtn').disabled = false;
    clearTaskForm();
}

function clearTaskForm() {
    // document.getElementById('newForm').reset();
    document.getElementById('newForm').remove();
    // document.getElementById('newTaskBtn').disabled = false;
    document.querySelectorAll('.newTaskBtn').forEach(e => e.disabled = false);
    document.getElementById('newProjectBtn').disabled = false;
}

function removeTask(e) {
    let targetId;
    let i;
    targetId = parseInt(e.target.parentElement.id,10);
    for (i = taskList.length -1; i >= 0; --i){
        if (taskList[i].id === targetId) {
            taskList.splice(i,1)
        }
    }

    e.target.parentElement.parentElement.remove();
    console.log(taskList);
}

function createProjectForm() {
    let container;
    container = document.getElementById('container');
    const newProject = document.createElement('form');
    newProject.classList.add('newProject');
    newProject.setAttribute('id', 'newProject');

    let projectTitleRow = document.createElement('div');
    projectTitleRow.classList.add('projectTitleRow');
    newProject.appendChild(projectTitleRow);

    let projectTitleLabel = document.createElement('label');
    projectTitleLabel.setAttribute('for', 'projectTitle');
    projectTitleLabel.textContent = 'Project Name';
    projectTitleRow.appendChild(projectTitleLabel);

    let projectTitleInput = document.createElement('input');
    projectTitleInput.setAttribute('type', 'text');
    projectTitleInput.setAttribute('id', 'projectTitle');
    projectTitleInput.setAttribute('name', 'projectTitle');
    projectTitleInput.setAttribute('required', "");
    projectTitleRow.appendChild(projectTitleInput);

    let projectSubmitRow = document.createElement('div');
    projectSubmitRow.classList.add('projectSubmitRow');
    newProject.appendChild(projectSubmitRow);

    let projectSubmitInput = document.createElement('input');
    projectSubmitInput.setAttribute('type', 'submit');
    projectSubmitRow.appendChild(projectSubmitInput);

    let projectSubmitCancel = document.createElement('button');
    projectSubmitCancel.classList.add('projectBtn');
    projectSubmitCancel.setAttribute('type', 'button');
    projectSubmitCancel.textContent = 'Cancel';
    projectSubmitRow.appendChild(projectSubmitCancel);

    container.appendChild(newProject);
    projectSubmitCancel.addEventListener('click', clearProjectForm);
    newProject.onsubmit= createProject;
    document.getElementById('newProjectBtn').disabled = true;
    document.querySelectorAll('.newTaskBtn').forEach(e => e.disabled = true);
}

function clearProjectForm(e) {
    // document.getElementById('newForm').reset();
    document.getElementById('newProject').remove();
    document.getElementById('newProjectBtn').disabled = false;
    document.querySelectorAll('.newTaskBtn').forEach(e => e.disabled = false);
}

function removeProject(e) {
    e.target.parentElement.parentElement.parentElement.remove();
}

function hideProject(e) {
    const childTasks = e.target.parentElement.parentElement.nextElementSibling;
    if (childTasks.style.display === 'none') {
        childTasks.style.display = 'table'
    } else {
        childTasks.style.display = 'none'
    }
}

export {
    createForm,
    addTask,
    clearTaskForm,
    removeTask,
    createProjectForm,
    clearProjectForm,
    removeProject, 
    hideProject,
}