import {Task} from "./Task";

export interface TaskRepository {
    addTask(taskTitle: String): void

    getTasks(): Task[]
}
