// console.log("a");
import { v4 as uuidV4 } from "uuid";

interface ITask {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
}

const list = document.querySelector<HTMLLIElement>("#list");
const form = document.querySelector<HTMLFormElement>("#new-task");
const input = document.querySelector<HTMLInputElement>("#new-task-title");

// const form = document.querySelector<HTMLFormElement>("#new-task");

form?.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input?.value == "" || input?.value == null) return;

    const newTask: ITask = {
        id: uuidV4(),
        title: input.value,
        completed: false,
        createdAt: new Date(),
    };

    addlistItem(newTask);
});

function addlistItem(task: ITask) {
    const item = document.createElement("li");

    const label = document.createElement("label");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    label.append(checkBox, task.title);

    item.append(label);
    list?.append(item);
}
