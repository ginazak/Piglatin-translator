def pigLatin(word):
    """ Encodes a given word to piglatin.
    Code assumes special characters are only at the end of the word.
    Code assumes capital letters are only at the beginning.
    Output is a string.
    """  

    vowels_str = "aeiouAEIOU"
    spl_characters = "!,.?-:;'"
    final_character = ""
    final_word = ""

    # Defensive code in case given word contains special characters
    for i in spl_characters:
        if word[-1] == i:
           word = word[:-1]
           final_character = i

    # Location of first vowel in word found and substrings generated
    vowel_index = [word.index(j) for j in word if j in vowels_str]
    vowel_index = vowel_index[0]
    prefix = word[0: vowel_index]
    suffix = word[vowel_index: ]

    # Condition if word begins with vowel
    if prefix == "":  
        final_word = word + "way" + final_character
    # Condition if word begins with consonent
    else:            
        final_word = suffix + prefix + "ay" + final_character

    # Defensive code in case given word is in Title case 
    if (word[0].isupper()):
        final_word = final_word[0].upper() + final_word[1:].lower()

    return final_word