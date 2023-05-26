interface IWordProps {
    guessedLetter: string[];
    wordToGuess: string;
}

const Word = ({ guessedLetter, wordToGuess }: IWordProps) => {
    return (
        <div
            style={{
                display: "flex",
                gap: ".25rem",
                fontSize: "6rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontFamily: "monospace",
            }}
        >
            {wordToGuess.split("").map((letter, index) => (
                <span style={{ borderBottom: ".1rem solid black" }} key={index}>
                    <span
                        style={{
                            visibility: guessedLetter.includes(letter)
                                ? "visible"
                                : "hidden",
                        }}
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
};

export default Word;
