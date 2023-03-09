import {Task} from "./Task";
import {TaskRepository} from "./TaskRepository";

class FakeTaskRepository implements TaskRepository {
    private tasks: Task[] = [];

    addTask(task: Task): void {
        this.tasks.push(task);
    }

    getTasks(): Task[] {
        return this.tasks;
    }
}
