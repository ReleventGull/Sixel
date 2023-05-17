import { useState } from "react"
import Squares from "./Squares"


const App = () => {
    const [rowsCol, setRolCol] = useState(Array(6).fill('1'))
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
        </>
    )
}

export default App