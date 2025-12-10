// The Composite Design Pattern is a structural pattern that organizes objects into tree structures, allowing clients to treat individual objects and groups of objects uniformly.

// As described by the Gang of four, "Compose objects into tree structure to represent part-whole hierarchies. Composite lets client treat individual objects and compositions of objects uniformly".


// Component
class Task {
    constructor(title) {
        if (this.constructor === Task) {
            throw new TypeError('Abstract class "Task" cannot be instantiated directly.');
        }
        this._title = title;
    }

    getTitle() {
        return this._title;
    }

    setTitle(title) {
        this._title = title;
    }

    display() {
        throw new TypeError('Method "display" must be implemented.');
    }
}

// Leaf
class SimpleTask extends Task {
    constructor(title) {
        super(title);
    }

    display() {
        console.log(`Simple Task: ${this._title}`);
    }
}

// Composite
class TaskList extends Task {
    constructor(title) {
        super(title);
        this._tasks = [];
    }

    addTask(task) {
        this._tasks.push(task);
    }

    removeTask(task) {
        this._tasks = this._tasks.filter(t => t !== task);
    }

    display() {
        console.log(`Task List: ${this._title}`);
        this._tasks.forEach(task => task.display());
    }
}

// Client
(() => {
    // Creating simple tasks
    const simpleTask1 = new SimpleTask('Complete Coding');
    const simpleTask2 = new SimpleTask('Write Documentation');

    // Creating a task list
    const projectTasks = new TaskList('Project Tasks');
    projectTasks.addTask(simpleTask1);
    projectTasks.addTask(simpleTask2);

    // Nested task list
    const phase1Tasks = new TaskList('Phase 1 Tasks');
    phase1Tasks.addTask(new SimpleTask('Design'));
    phase1Tasks.addTask(new SimpleTask('Implementation'));

    projectTasks.addTask(phase1Tasks);

    // Displaying tasks
    projectTasks.display();
})();