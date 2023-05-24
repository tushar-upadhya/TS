import SingleTodo from "./SingleTodo";

import { ITodo } from "./model";

interface Props {
    todos: Array<ITodo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<ITodo>>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
    return (
        <div className="todos">
            {todos.map((todo) => (
                <SingleTodo
                    todo={todo}
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))}
        </div>
    );
};

export default TodoList;
