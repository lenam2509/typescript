"use strict";
class Task {
    constructor(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    show() {
        console.log(`${this.id} - ${this.name} - ${this.status}`);
    }
}
let task1 = new Task(1, 'coding', 'done');
task1.show();
class SubTask extends Task {
    show() {
        super.show();
    }
}
let subtask1 = new SubTask(2, 'sleeping', 'done');
subtask1.show();
