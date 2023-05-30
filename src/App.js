import { useState } from "react"
import { Squares } from "./Squares"
import { wordChecker } from "./logic"


const App = () => {
    const [rowsCol, setRolCol] = useState(Array(6).fill('1'))
    const [keyboard, setKeyboard] = useState([`${'Q W E R T Y U I O P'}`.split(' '), `A S D F G H J K L`.split(' '), 'Z X C V B N M'.split(' ')])
    const [wordGuess, setWordGuess] = useState([]);
    const [rowState, setRowState] = useState(0);
    const [counter, setCounter] = useState(0);

    // useState to keep track of letters pressed
    // enter button is disabled until useSTate length == 5
    // on 5 letters, user pressed the enter button, it checks if that word == something from wordList
    // if guess is a word, set wordGuess back to null, move on to second row?

    const handleCheck = () => {
        console.log('this was the guessed word: ', wordGuess);
        console.log('this is joined', String(wordGuess.join("")));
        console.log('word checker', wordChecker(wordGuess));
    }

    return (
        <div className="mainContainer">

            {/* build table */}
            <div className="table">
                <div className="row">
                    <div className="square" value={wordGuess[0]}>{wordGuess[0]}</div>
                    <div className="square">{wordGuess[1]}</div>
                    <div className="square">{wordGuess[2]}</div>
                    <div className="square">{wordGuess[3]}</div>
                    <div className="square">{wordGuess[4]}</div>
                    <div className="square">{wordGuess[5]}</div>
                </div>
                <div className="row">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                </div>
                <div className="row">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                </div>
                <div className="row">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                </div>
                <div className="row">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                </div>
                <div className="row">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                </div>
            </div>
        
            <div className="table">
            {rowsCol.map(it => 
                <div className="row">
                    {rowsCol.map(it => 
                    <div className="square">
                       <Squares wordGuess={wordGuess}/>

                    </div>)}
                </div>
            )}
            </div>
            <div className="keyboard">
                    {keyboard.map(it =>
                    <div className="keyRow"> 
                        {it.map(it2 => 
                            <button className="letterKey">
                                <h3 onClick={(event) => 
                                    setWordGuess((previous) => [...previous, event.target.textContent])}>{it2}
                                </h3>
                            </button>
                            )}

                    </div>
                        )}
                {/* add enter button that checks if word is real, and then updates rowState */}
                <button 
                    className="letterKey" 
                    type="submit" 
                    // onClick={() => {if (wordGuess.length == 6) {
                    //     handleCheck()
                    // }}}>Enter</button>
                    onClick={handleCheck()}>Enter
                </button>
                <button 
                    className="letterKey" 
                    onClick={() => {setWordGuess([]); console.log(wordGuess)}}>Backspace</button>
            </div>
        </div>
    )
}

export default App