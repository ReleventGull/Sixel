import { useState } from "react"
import { Squares } from "./Squares"


const App = () => {
    const [rowsCol, setRolCol] = useState(Array(6).fill('1'))
    const [keyboard, setKeyboard] = useState([`${'Q W E R T Y U I O P'}`.split(' '), `A S D F G H J K L`.split(' '), 'Z X C V B N M'.split(' ')])
    const [wordGuess1, setWordGuess] = useState([]);
    const [wordGuess2, setWordGuess2] = useState([]);
    const [rowState, setRowState] = useState(0);

    return (
        <div className="mainContainer">

            {/* build table */}
            <div className="table">
                <div className="row">
                    <div className="square">{wordGuess1[0]}</div>
                    <div className="square">{wordGuess1[1]}</div>
                    <div className="square">{wordGuess1[2]}</div>
                    <div className="square">{wordGuess1[3]}</div>
                    <div className="square">{wordGuess1[4]}</div>
                    <div className="square">{wordGuess1[5]}</div>
                </div>
                <div className="row">
                    <div className="square">{wordGuess2[1]}</div>
                    <div className="square">{wordGuess2[2]}</div>
                    <div className="square">{wordGuess2[3]}</div>
                    <div className="square">{wordGuess2[4]}</div>
                    <div className="square">{wordGuess2[0]}</div>
                    <div className="square">{wordGuess2[5]}</div>
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
        
            {/* <div className="table">
            {rowsCol.map(it => 
                <div className="row">
                    {rowsCol.map(it => 
                    <div className="square">
                       <Squares wordGuess={wordGuess}/>

                    </div>)}
                </div>
            )}
            </div> */}
            <div className="keyboard">
                    {keyboard.map(it =>
                    <div className="keyRow"> 
                        {it.map(it2 => 
                            <div className="letterKey" ><h3 onClick={(event) => 
                                setWordGuess((previous) => [...previous, event.target.textContent])}>{it2}</h3 ></div>
                            
                            )}

                    </div>
                        )}
                {/* add enter button that checks if word is real, and then updates rowState */}
            </div>
            </div>
    )
}

export default App