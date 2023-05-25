import { useState } from "react";

import words from "./components/wordList.json";

import Drawing from "./components/Drawing";
import Word from "./components/Word";
import KeyBoard from "./components/KeyBoard";

function App() {
    const [wordToGuess, setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)];
    });
    // console.log("wordToGuess:", wordToGuess);

    const [guessedLetter, setGuessedLetter] = useState<string[]>([]);
    return (
        <div
            style={{
                maxWidth: "800px",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                margin: "0 auto",
                alignItems: "center",
            }}
        >
            <div style={{ fontSize: "2rem", textAlign: "center" }}>
                lose or win
            </div>

            <Drawing />
            {/* <Word />
            <KeyBoard /> */}
        </div>
    );
}

export default App;
