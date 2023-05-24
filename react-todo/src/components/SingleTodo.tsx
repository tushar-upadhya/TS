import { ITodo } from "./model";

import "./style.css";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
    todo: ITodo;
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<Array<ITodo>>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    return (
        <form className="todos_single">
            <span className="todo_single_text">{todo.todo}</span>

            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>

                <span className="icon">
                    <AiFillDelete />
                </span>

                <span className="icon">
                    <MdDone />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;
