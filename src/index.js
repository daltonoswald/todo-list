// Things to do - 
// - - reorganize the buttons and containers

import { format } from 'date-fns'
// import { compareAsc, format } from 'date-fns'
import { createForm, addTask, removeTask, createProjectForm, addProject } from './form.js'
import { createTask, createProject } from './taskUI.js';
import './styles.css';

// createForm();
// createProjectForm();
// let newTask = document.getElementById('newTask');
// newTask.addEventListener('click', createForm);

// will use this when making a button to open the new project form
let newProject = document.getElementById('newProjectBtn');
newProject.addEventListener('click', createProjectForm);


class Task {
    constructor(id, title, description, dueDate, priority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

console.log("Hello webpack");