function pigLatin(word) {
    /* Encodes a single given word to Piglatin.
    * Code assumes special characters are only at the end of the word.
    * Code assumes capital letters are only at the beginning.
    * Output is a string.
    */

    const splCharacters = "!,.?-:;'";
    const vowelsList = "aeiouAEIOU";
    let finalWord = "";
    let finalChar = ""; 

    // Defensive code in case given word contains special characters
    if (splCharacters.includes(word[word.length - 1])){
        finalChar = word[word.length - 1];
        word = word.substring(0, word.length - 1);
    }

    // Index of first vowel found in given word
    for (let i = 0; i < word.length; i++) {
        if (vowelsList.includes(word[i])){
            var vowel_index = word.indexOf(word[i]);
            break;
        }   
    }
    // Possible options generated for word starting with vowel or consonent
    if (vowel_index == 0){  
        finalWord = word + "way" + finalChar;
    } else {                
        prefix = word.substring(0, vowel_index);            
        suffix = word.substring(vowel_index);
        finalWord = suffix + prefix + "ay" + finalChar;        
    }

    // Defensive code in case given word is in Title case    
    if (word[0] == word[0].toUpperCase()) {
        finalWord = finalWord[0].toUpperCase() + finalWord.substring(1).toLowerCase();
    }   
    return finalWord; 
}