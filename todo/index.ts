// console.log("a");
import { v4 as uuidV4 } from "uuid";

const list = document.querySelector<HTMLLIElement>("#list");
const form = document.querySelector<HTMLFormElement>("#new-task");
const input = document.querySelector<HTMLInputElement>("#new-task-title");

// const form = document.querySelector<HTMLFormElement>("#new-task");

form?.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input?.value == "" || input?.value == null) return;

    const task = {
        id: "",
        title: "",
        completed: false,
        createdAt: new Date(),
    };
    input.value;
});
