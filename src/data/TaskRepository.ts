import {Task} from "./Task";

export interface TaskRepository {
    addTask(task: Task): void

    getTasks(): Task[]
}
