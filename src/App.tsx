import React, {useState} from 'react';
import './App.css';
import {Task} from "./data/Task";
import {FakeTaskRepository} from "./data/FakeTaskRepository"
import {Trello} from "./types/trello";
// import {CapabilityProps} from "./types/power_up";
// import {CAPABILITY_PROPS, Trello} from "./types/trello"
// import {CapabilityProps} from "./types/power_up";

const taskRepository = new FakeTaskRepository()

window.TrelloPowerUp.initialize({
    'card-buttons': (t: Trello.PowerUp.IFrame) => [{
        icon: "/logo192.png",
        text: 'Add a Note',
        callback: (tc: Trello.PowerUp.IFrame): PromiseLike<void> => {
            console.log('Button clicked!');
            return Promise.resolve();
        }
    }]
});

//
// export function getCardButton(_t: Trello.PowerUp.IFrame, props: CapabilityProps): Trello.PowerUp.CardButton[] {
//     return [{
//         icon: props.baseUrl + props.icon.dark,
//         text: 'Add a Note',
//         callback: (tc: Trello.PowerUp.IFrame) => tc.popup({
//             title: 'Add a Note',
//             url: './card-button.html',
//             height: 300
//         })
//     }];
// }

function App() {
    const items = taskRepository.getTasks()

    return (
        <div className="App">
            <header className="App-header">
                <AddTask/>
                <TaskList name="hello" tasks={items}/>
            </header>
        </div>
    );
}

interface TaskListProps {
    name: string;
    tasks: Task[]
}

class TaskList extends React.Component<TaskListProps> {
    render() {
        return (
            <div className="shopping-list">
                <h3>Shopping List for {this.props.name}</h3>
                <ul>
                    {this.props.tasks.map(task => (
                        <li key={task.id}>{task.title}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const AddTask = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input type="text" id="task-input" value={inputValue} onChange={handleInputChange}/>
            <button className="square" onClick={
                () => {
                    taskRepository.addTask(inputValue)
                }
            }>Add Task
            </button>
        </div>
    );
}

export default App;
