import "./App.css";

import InputField from "./components/InputField";

import { useState } from "react";

import { ITodo } from "./components/model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
    // console.log("todo:", todo);
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Array<ITodo>>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
            setTodo("");
        }
    };

    // console.log(todo);

    return (
        <div className="App">
            <span className="heading">TASK</span>

            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default App;
