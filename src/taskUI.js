import { format, parseISO } from 'date-fns'
import { createForm, removeTask, clearProjectForm, removeProject } from "./form";

// divs
// function createTask(id, title, description, dueDate, priority, e) {
//     const taskCard = document.createElement('div');
//     // taskCard.setAttribute('id', id);
//     taskCard.classList.add('taskCard');
    
//     let titleElement = document.createElement('p');
//     titleElement.classList.add('title');
//     let descriptionElement = document.createElement('p');
//     descriptionElement.classList.add('description');
//     let dueDateElement = document.createElement('p');
//     dueDateElement.classList.add('dueDate');
//     let priorityElement = document.createElement('p');
//     priorityElement.classList.add('priority');
//     let removeBtnElement = document.createElement('button');
//     removeBtnElement.setAttribute('id', 'remove');
//     removeBtnElement.classList.add('remove');

//     titleElement.textContent = `${title}`;
//     descriptionElement.textContent = `${description}`;
//     // dueDateElement.textContent = `${dueDate}`;
//     dueDateElement.textContent = format(new Date(`${dueDate}`), 'MM/dd/yyyy');
//     priorityElement.textContent = `${priority}`;
//     removeBtnElement.textContent = "Remove";

//     e.target.parentElement.appendChild(taskCard);
//     taskCard.appendChild(titleElement);
//     taskCard.appendChild(descriptionElement);
//     taskCard.appendChild(dueDateElement);
//     taskCard.appendChild(priorityElement);
//     taskCard.appendChild(removeBtnElement);

//     removeBtnElement.addEventListener('click', removeTask);
// }

// function createProject(e, projectTitle) {
//     e.preventDefault();
//     const newProjectElement = document.createElement('div');
//     newProjectElement.classList.add('project');
//     content.appendChild(newProjectElement);

//     const projectHeading = document.createElement('div');
//     projectHeading.classList.add('projectHeading');
//     newProjectElement.appendChild(projectHeading);

//     let projectTitleText = document.querySelector('#projectTitle');
//     let projectTitleElement = document.createElement('div');
//     projectTitleElement.classList.add('projectTitle');
//     projectTitleElement.textContent = `${projectTitleText.value}`
//     projectHeading.appendChild(projectTitleElement)
//     // newProjectElement.appendChild(projectTitleElement);

//     const newTaskBtn = document.createElement('button');
//     newTaskBtn.setAttribute('id', 'newTaskBtn');
//     newTaskBtn.textContent = "New Task";
//     projectHeading.appendChild(newTaskBtn);
//     newTaskBtn.addEventListener('click', createForm);
//     clearProjectForm();

//     const removeProjectBtn = document.createElement('button');
//     removeProjectBtn.setAttribute('id', 'removeProjectButton');
//     removeProjectBtn.textContent = "Remove Project";
//     projectHeading.appendChild(removeProjectBtn);
//     removeProjectBtn.addEventListener('click', removeProject)
    
//     document.getElementById('newProjectBtn').disabled = false;

//     console.log('hello from createproject')
// }


// createTask tables
function createTask(id, title, description, dueDate, priority, e) {
    const taskCard = document.createElement('tr');
    // taskCard.setAttribute('id', id);
    taskCard.classList.add('taskCard');

    let titleElement = document.createElement('td');
    titleElement.classList.add('title');
    let descriptionElement = document.createElement('td');
    descriptionElement.classList.add('description');
    let dueDateElement = document.createElement('td');
    dueDateElement.classList.add('dueDate');
    let priorityElement = document.createElement('td');
    priorityElement.classList.add('priority');
    let removeBtnTableElement = document.createElement('td');
    removeBtnTableElement.classList.add('remove');


    let removeBtnElement = document.createElement('button');
    removeBtnElement.setAttribute('id', 'remove');
    removeBtnElement.classList.add('remove');






    titleElement.textContent = `${title}`;
    descriptionElement.textContent = `${description}`;
    // dueDateElement.textContent = `${dueDate}`;
    console.log(dueDate);
    const newDateValue = parseISO(new Date(dueDate).toISOString());
    console.log(`newDateValue; ${newDateValue}`);
    dueDateElement.textContent = format(new Date(`${dueDate}`), 'MM/dd/yyyy');
    priorityElement.textContent = `${priority}`;
    removeBtnElement.textContent = "Remove";

    // e.target.parentElement.appendChild(projectTable);
    // const projectTable = e.target.parentElement;
    const projectTable = e.target.parentElement.querySelector('.projectTable');
    projectTable.appendChild(taskCard);
    taskCard.appendChild(titleElement);
    taskCard.appendChild(descriptionElement);
    taskCard.appendChild(dueDateElement);
    taskCard.appendChild(priorityElement);
    removeBtnTableElement.appendChild(removeBtnElement);
    taskCard.appendChild(removeBtnTableElement);

    removeBtnElement.addEventListener('click', removeTask);
}
function createProject(e, projectTitle) {
    e.preventDefault();
    const newProjectElement = document.createElement('div');
    newProjectElement.classList.add('project');
    content.appendChild(newProjectElement);

    const projectHeading = document.createElement('div');
    projectHeading.classList.add('projectHeading');
    newProjectElement.appendChild(projectHeading);

    let projectTitleText = document.querySelector('#projectTitle');
    let projectTitleElement = document.createElement('div');
    projectTitleElement.classList.add('projectTitle');
    projectTitleElement.textContent = `${projectTitleText.value}`
    projectHeading.appendChild(projectTitleElement)
    // newProjectElement.appendChild(projectTitleElement);

    const newTaskBtn = document.createElement('button');
    newTaskBtn.setAttribute('id', 'newTaskBtn');
    newTaskBtn.textContent = "New Task";
    projectHeading.appendChild(newTaskBtn);
    newTaskBtn.addEventListener('click', createForm);
    clearProjectForm();

    const removeProjectBtn = document.createElement('button');
    removeProjectBtn.setAttribute('id', 'removeProjectButton');
    removeProjectBtn.textContent = "Remove Project";
    projectHeading.appendChild(removeProjectBtn);
    removeProjectBtn.addEventListener('click', removeProject)
    
    document.getElementById('newProjectBtn').disabled = false;

    const projectTable = document.createElement('table');
    projectTable.classList.add('projectTable');
    const tableHeaders = document.createElement('tr');

    const titleHeader = document.createElement('th');
    titleHeader.textContent = 'Task';
    const descriptionHeader = document.createElement('th');
    descriptionHeader.textContent = 'Description';
    const dueDateHeader = document.createElement('th');
    dueDateHeader.textContent = 'Due Date';
    const priorityHeader = document.createElement('th');
    priorityHeader.textContent = 'Priority';
    const removeHeader = document.createElement('th');
    removeHeader.textContent = 'Remove';

    newProjectElement.appendChild(projectTable);
    projectTable.appendChild(tableHeaders);
    tableHeaders.appendChild(titleHeader);
    tableHeaders.appendChild(descriptionHeader);
    tableHeaders.appendChild(dueDateHeader);
    tableHeaders.appendChild(priorityHeader);
    tableHeaders.appendChild(removeHeader);

    console.log('hello from createproject')
}



export {
    createTask,
    createProject,
}


