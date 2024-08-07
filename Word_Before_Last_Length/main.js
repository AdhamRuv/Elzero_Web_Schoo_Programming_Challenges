function wordBeforeLastLength(sentence){
    const splitedSentence = sentence.trim().split(/\s+/);
    const filteredSentence = splitedSentence.filter(word => word.length > 1);
    if(filteredSentence.length <= 1){
        console.log(filteredSentence)
        return false;
    } else if(filteredSentence.length === 2){
        return `${filteredSentence[0]}`;
    } else{
        const lastWord = filteredSentence[filteredSentence.length-2];
        return `${lastWord} => ${lastWord.length}`;
    }
};

console.log(wordBeforeLastLength("Elzero Web School")); // Web => 3
console.log(wordBeforeLastLength("Hello Elzero Web School    A ")); // Web => 3
console.log(wordBeforeLastLength("Hello Elzero    Web   School  ")); // Web => 3
console.log(wordBeforeLastLength("Hello")); // False
console.log(wordBeforeLastLength("Hello Elzero")); // Hello
console.log(wordBeforeLastLength("Hello Elzero    A")); // Hello