import {Task} from "./Task";
import {TaskRepository} from "./TaskRepository";

export class FakeTaskRepository implements TaskRepository {
    private tasks: Task[] = [
        {id: "11", title: "Task 1", isChecked: true},
        {id: "13", title: "Task 1", isChecked: true},
        {id: "13", title: "Task 1", isChecked: true}
    ];

    addTask(taskTitle: string): void {
        // TODO auto generate the id
        const task = { id: taskTitle, title: taskTitle, isChecked: false }
        this.tasks.push(task);
        console.log("task is " + task)
    }

    getTasks(): Task[] {
        return this.tasks;
    }
}
