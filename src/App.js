import { useState } from "react"
import Squares from "./Squares"


const App = () => {
    const [rowsCol, setRolCol] = useState(Array(6).fill('1'))
    const [keyboard, setKeyboard] = useState([`${'Q W E R T Y U I O P'}`.split(' '), `A S D F G H J K L`.split(' '), 'ENTER Z X C V B N M BACKSPACE'.split(' ')])
    console.log(keyboard)
    return (
        <>
            <div className="table">
            {rowsCol.map(it => 
                <div className="row">
                    {rowsCol.map(it => 
                    <div className="square">
                    </div>)}
                </div>
            )}
            </div>
            <div className="keyboard">
                    {keyboard.map(it =>
                    <div className="keyRow"> 
                        {it.map(it2 => 
                            <div className="letterKey"><h1>{it2}</h1></div>
                            
                            )}

                    </div>
                        )}
            </div>
        </>
    )
}

export default App