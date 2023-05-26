import { useState } from "react"
import { Squares } from "./Squares"


const App = () => {
    const [rowsCol, setRolCol] = useState(Array(6).fill('1'))
    const [keyboard, setKeyboard] = useState([`${'Q W E R T Y U I O P'}`.split(' '), `A S D F G H J K L`.split(' '), 'Z X C V B N M'.split(' ')])
    const [wordGuess, setWordGuess] = useState([]);
    console.log('word guess', wordGuess)
    return (
        <div className="mainContainer">

        
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
                            <div className="letterKey" ><h3 onClick={(event) => 
                                setWordGuess((previous) => [...previous, event.target.textContent])}>{it2}</h3 ></div>
                            
                            )}

                    </div>
                        )}
            </div>
            </div>
    )
}

export default App