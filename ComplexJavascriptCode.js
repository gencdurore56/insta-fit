/*
Filename: ComplexJavascriptCode.js

Description: This code showcases a complex and sophisticated implementation of a task tracking system. It utilizes functions, classes, closures, and various advanced concepts in JavaScript to create a professional-grade solution.

IMPORTANT: This code snippet is a demonstration and may not include comprehensive error handling, input validation, or security measures.


Helpful Links:
1. MDN JavaScript Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript

*/

// Class representing a single task
class Task {
  constructor(id, title, description, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }

  // Toggle the completion status of the task
  toggleCompletion() {
    this.completed = !this.completed;
  }
}

// Class representing a task manager
class TaskManager {
  constructor() {
    this.tasks = [];
    this.currentId = 0;
  }

  // Add a new task to the task manager
  addTask(title, description) {
    const task = new Task(this.currentId++, title, description, false);
    this.tasks.push(task);
  }

  // Get a specific task by its ID
  getTaskById(id) {
    return this.tasks.find((task) => task.id === id);
  }

  // Get all the tasks based on completion status
  getTasks(completed = undefined) {
    if (completed === undefined) {
      return this.tasks;
    }
    return this.tasks.filter((task) => task.completed === completed);
  }

  // Toggle the completion status of a task based on its ID
  toggleTaskCompletion(id) {
    const task = this.getTaskById(id);
    if (task) {
      task.toggleCompletion();
    }
  }

  // Remove a task from the task manager based on its ID
  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}

// Example usage

const taskManager = new TaskManager();

taskManager.addTask("Complete project", "Finish coding the project by the given deadline.");
taskManager.addTask("Prepare presentation", "Create slides to present the project to stakeholders.");

console.log(taskManager.getTasks()); // Show all tasks

taskManager.toggleTaskCompletion(0);

console.log(taskManager.getTasks(true)); // Show completed tasks

taskManager.removeTask(1);

console.log(taskManager.getTasks()); // Show remaining tasks

// ... (continue adding, modifying, or removing tasks as necessary)