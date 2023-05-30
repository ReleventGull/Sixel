// import the word list
import word_list from "./Word_List";
const [secretWord, setSecretWord] = useState(Array(6)); // string? array?

// find a random word from the array
const wordNum = Math.floor(Math.random() * word_list.length);

// use that word to set the state for each tile on the page
setSecretWord(word_list[wordNum]);

// check if a letter is exact
const letterExact = (letter, position) => {
    if (secretWord[position] == letter) {
        return true;
    } else {
        return false;
    }
}

//check if a letter is in a secret word
const wordContainsLetter = (letter) => {
    if (secretWord.includes(letter)) {
        return true;
    } else {
        return false;
    }
}

export const wordChecker = (guess) => {
    if (word_list.includes(guess)) {
        return true;
    } else {
        return false;
    }
}


// work out how to check for each letter later
const letterChecker = (guessArray) => { // should it take a string or array of each individual letter?
    // const firstLetter = string[0];
    // const secondLetter = string[1];
    // const thirdLetter = string[2];
    // const fourthLetter = string[3];
    // const fifthLetter = string[4];
    // const sixthLetter = string[5];
    for (let i = 0; i < secretWord.length; i++){
        if (secretWord[i] == guessArray[i]){
            // still not sure what to return??
            return true;
        } else if (secretWord.includes(guessArray[i])) {
            // we need an else/if to check if the letter is elsewhere in the word
            return true; // we need something between true and false lol
        } else {
            // if the letter isn't in the word, return false
            return false;
        }
    }

    // if (string == secretWord[position]) {
    //     return true;
    // } else {
    //     // if secret word has letter in it {{ somewhere }}
    //     secretWord.split()
    // }

    // what do we return here? should we run the function for each letter or do it all at once
    // we need to check that each submitted letter == same letter in the secret word at that position
    // we also need to check if that letter is elsewhere in the word, if not at that spot


}