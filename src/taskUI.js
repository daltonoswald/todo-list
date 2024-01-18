import { format, parseISO } from 'date-fns'
import { createForm, removeTask, clearProjectForm, removeProject, hideProject } from "./form";

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

    if (priorityElement.textContent === 'Low') {
        taskCard.classList.add('low');
    } else if (priorityElement.textContent === 'Medium') {
        taskCard.classList.add('medium');
    } else if (priorityElement.textContent === 'High') {
        taskCard.classList.add('high')
    }
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
    // projectHeading.appendChild(projectTitleElement)

    const newTaskBtn = document.createElement('button');
    newTaskBtn.setAttribute('id', 'newTaskBtn');
    newTaskBtn.textContent = "New Task";
    // projectHeading.appendChild(newTaskBtn);
    newTaskBtn.addEventListener('click', createForm);
    clearProjectForm();

    const projectHeadingLeft = document.createElement('div');
    projectHeadingLeft.classList.add('projectHeadingLeft');
    projectHeadingLeft.appendChild(projectTitleElement);
    projectHeadingLeft.appendChild(newTaskBtn);
    projectHeading.appendChild(projectHeadingLeft);

    const hideProjectBtn = document.createElement('button');
    hideProjectBtn.setAttribute('id', 'hideProjectButton');
    hideProjectBtn.textContent = 'Hide Project';
    // projectHeading.appendChild(hideProjectBtn);
    hideProjectBtn.addEventListener('click', hideProject);

    const removeProjectBtn = document.createElement('button');
    removeProjectBtn.setAttribute('id', 'removeProjectButton');
    removeProjectBtn.textContent = "Remove Project";
    // projectHeading.appendChild(removeProjectBtn);
    removeProjectBtn.addEventListener('click', removeProject)

    const projectHeadingRight = document.createElement('div');
    projectHeadingRight.classList.add('projectHeadingRight');
    projectHeadingRight.appendChild(hideProjectBtn);
    projectHeadingRight.appendChild(removeProjectBtn);
    projectHeading.appendChild(projectHeadingRight);
    
    document.getElementById('newProjectBtn').disabled = false;

    const projectTable = document.createElement('table');
    projectTable.setAttribute('id', 'projectTable');
    projectTable.classList.add('projectTable');
    const tableHeaders = document.createElement('tr');

    const titleHeader = document.createElement('th');
    titleHeader.textContent = 'Task';
    titleHeader.setAttribute('id', 'taskColumn');
    const descriptionHeader = document.createElement('th');
    descriptionHeader.textContent = 'Description';
    descriptionHeader.setAttribute('id', 'descriptionColumn');
    const dueDateHeader = document.createElement('th');
    dueDateHeader.textContent = 'Due Date';
    dueDateHeader.setAttribute('id', 'dueDateColumn');
    const priorityHeader = document.createElement('th');
    priorityHeader.textContent = 'Priority';
    priorityHeader.setAttribute('id', 'priorityColumn');
    const removeHeader = document.createElement('th');
    removeHeader.textContent = 'Remove';
    removeHeader.setAttribute('id', 'removeColumn');

    newProjectElement.appendChild(projectTable);
    projectTable.appendChild(tableHeaders);
    tableHeaders.appendChild(titleHeader);
    tableHeaders.appendChild(descriptionHeader);
    tableHeaders.appendChild(dueDateHeader);
    tableHeaders.appendChild(priorityHeader);
    tableHeaders.appendChild(removeHeader);

    // titleHeader.addEventListener('click', sortTable);
    // descriptionHeader.addEventListener('click', sortTable(1));
    // dueDateHeader.addEventListener('click', sortTable(2));

    console.log('hello from createproject')
}

// function sortTable(n) {
//     // From w3schools.com how to sort table js
//     console.log("Hello from sortTable");
//     let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
//     table = document.getElementById('projectTable');
//     switching = true;
//     // Set the sorting direction to ascending:
//     dir = "asc";
//     // make a loop that will continue until no switching has been done:
//     while (switching) {
//         // Start by saying: no switching is done:
//         switching = false;
//         rows = table.rows;
//         // Loop through all table rows (except the first, which contains table headers):
//         for (i = 1; i < (rows.length -1); i++) {
//             //Start by saying there should be no switching:
//             shouldSwitch = false;
//             // Get the two elements you want to compare, one from current row and one from the next:
//             x = rows[i].getElementsByTagName("td")[n];
//             y = rows[i].getElementsByTagName("td")[n];
//             console.log(x);
//             console.log(y);
//             // Check if the two rows should switch place, based on the direction, asc or desc:
//             if (dir == 'asc') {
//                 if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//                     // If so, mark as a switch and break the loop:
//                     shouldSwitch = true;
//                     break;
//                 }
//             } else if (dir == "desc") {
//                 if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
//                     //If so, mark as a switch and break the loop:
//                     shouldSwitch = true;
//                     break;
//                 }
//             }
//         }
//         if (shouldSwitch) {
//             // If a switch has been marked, make the switch and mark that a switch has been done:
//             rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//             switching = true;
//             // Each tiem a switch is done increase this count by 1:
//             switchcount ++;
//         } else {
//             // If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.
//             if (switchcount == 0 && dir == "asc") {
//                 dir = "desc";
//                 switching = true;
//             }
//         }
//     }
// }

export {
    createTask,
    createProject,
}


