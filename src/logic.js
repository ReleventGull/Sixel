// import the word list
import word_list from "./Word_List";
const [secretWord, setSecretWord] = useState(""); // string?

// find a random word from the array
const wordNum = Math.floor(Math.random() * word_list.length);

// use that word to set the state for each tile on the page
setSecretWord(word_list[wordNum]);

// work out how to check for each letter later