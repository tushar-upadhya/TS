import { useRef } from "react";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            className="input"
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}
        >
            <input
                ref={inputRef}
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
