function find_missing_letter_in_ap1(letters){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let slicedSection = alphabet.slice(alphabet.indexOf(letters[0]), alphabet.indexOf(letters[letters.length-1])+1);
    let missingLetter =  slicedSection.find((letter, index)=> letter !== letters[index]);
    return missingLetter === undefined ? `No Missing Letter In Sequence` : missingLetter;
};

// Testing Ouput
console.log(find_missing_letter_in_ap1("abcdeghi")) // f
console.log(find_missing_letter_in_ap1("defgi")) // h
console.log(find_missing_letter_in_ap1("xyz")) // No Missing Letter In Sequence