interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    return (
        <form
            className="input"
            onSubmit={(e) => {
                handleAdd(e);
            }}
        >
            <input
                type="input"
                placeholder="Enter a Task"
                className="input_box"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />

            <button className="input_submit" type="submit">
                GO
            </button>
        </form>
    );
};

export default InputField;
