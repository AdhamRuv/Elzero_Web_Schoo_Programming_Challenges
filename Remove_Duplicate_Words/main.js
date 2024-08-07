// First Approach: (Using (Set) Object)
function remove_duplicate_words_from_ap1(sentence){
    const filteredWords = new Set(sentence.split(/\s+/));
    return [...filteredWords].join(' ');
};

// Second Approach: (Using (Array.from() Method))
function remove_duplicate_words_from_ap2(sentence){
    return Array.from(new Set(sentence.split(/\s+/))).join(' ');
};

// Third Approach: (Using Object & Filter Method)
function remove_duplicate_words_from_ap3(sentence){
    let filteredWords = new Object();
    sentence.split(/\s+/).filter((word)=>{
        return !filteredWords.hasOwnProperty(word) ? filteredWords[word] = true : null;
    });
    return Object.keys(filteredWords).join(' ');
};

// Forth Approach: (Using Reduce Method)
function remove_duplicate_words_from_ap4(sentence){
    return sentence.split(/\s+/).reduce((acc, word)=>{
        !acc.includes(word) ? acc.push(word) : null;
        return acc
    }, []).join(' ');
};

// Fifth Approach: (Using ForEach Method)
function remove_duplicate_words_from_ap5(sentence){
    let filteredWords = new Array();
    sentence.split(/\s+/).forEach((word)=>{
        !filteredWords.includes(word) ? filteredWords.push(word) : null;
    })
    return filteredWords.join(' ');
};

// Testing Ouput
console.log(remove_duplicate_words_from_ap1("Hello Elzero Web Web Hello School"));
console.log(remove_duplicate_words_from_ap2("Hello Elzero Web Web Hello School"));
console.log(remove_duplicate_words_from_ap3("Hello Elzero Web Web Hello School"));
console.log(remove_duplicate_words_from_ap4("Hello Elzero Web Web Hello School"));
console.log(remove_duplicate_words_from_ap5("Hello Elzero Web Web Hello School"));
// Hello Elzero Web School