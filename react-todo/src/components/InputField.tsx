import "./style.css";

const InputField = () => {
    return (
        <form className="input">
            <input
                type="input"
                placeholder="Enter a Task"
                className="input_box"
            />

            <button className="input_submit" type="submit">
                GO
            </button>
        </form>
    );
};

export default InputField;
