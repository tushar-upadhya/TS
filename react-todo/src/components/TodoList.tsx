import { ITodo } from "./model";
import "./style.css";

interface Props {
    todos: Array<ITodo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<ITodo>>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
    return (
        <div className="todos">
            {todos.map((todo) => (
                <li>{todo.todo}</li>
            ))}
        </div>
    );
};

export default TodoList;
