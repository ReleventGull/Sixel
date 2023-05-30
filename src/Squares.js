import { useState } from "react";

export const Squares = ({wordGuess}) => {

    return (
        <div className="square">
            {wordGuess[1]}
        </div>
    )
}

