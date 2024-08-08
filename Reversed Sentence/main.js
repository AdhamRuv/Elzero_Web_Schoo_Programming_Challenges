// First Approach:
function reverse_ap1(sentence){
    return sentence.split(/\s+/).reverse().join(' ');
};

// Second Approach:
function reverse_ap2(sentence){
    const wordsSet = new Set(sentence.split(/\s+/));
    return Array.from(wordsSet).reverse().join(' ');
};

// Third Approach:
function reverse_ap3(sentence) {
    const wordsArr = sentence.split(/\s+/)
    let reversedArr = new Array();
    for(let i=wordsArr.length-1; i>=0; i--){
        reversedArr.push(wordsArr[i])
    };
    return reversedArr.join(' ');
};

// Forth Approach:
function reverse_ap4(sentence) {
    return sentence.split(/\s+/).reduce((reversed, word)=>{
        reversed.unshift(word);
        return reversed;
    }, []).join(' ');
};

// Fifth Approach:
function reverse_ap5(sentence) {
    const wordsArr = sentence.split(/\s+/);
    let wordsObj = new Object({});
    for(const key of wordsArr){
        wordsObj[wordsArr.indexOf(key)] = key;
    };
    const reversedArr = Object.values(wordsObj).reverse();
    return reversedArr.join(' ');
};

// Testing Ouput
console.log(reverse_ap1("Elzero Web School"));  // "School Web Elzero"
console.log(reverse_ap2("Elzero Web School"));  // "School Web Elzero"
console.log(reverse_ap3("Elzero Web School"));  // "School Web Elzero"
console.log(reverse_ap4("Elzero Web School"));  // "School Web Elzero"
console.log(reverse_ap5("Elzero Web School"));  // "School Web Elzero"