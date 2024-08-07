// First Approach: (Reduce Method)
function longest_word_in_ap1(sentence){
    return sentence.split(/\s+/).reduce((pre, cur)=>{
        return pre.length < cur.length ? pre = cur : pre;
    })
}

// Testing Ouput
console.log(longest_word_in_ap1("In Programming We Love Elzero Academy Tooooooooooo Much")) // Tooooooooooo

// Second Approach: (ForEach Method)
function longest_word_in_ap2(sentence){
    let initialValue = '';
    sentence.split(/\s+/).forEach((word)=>{
        word.length > initialValue.length ? initialValue = word : null;
    })
    return initialValue;
}

// Testing Ouput
console.log(longest_word_in_ap2("In Programming We Love Elzero Academy Tooooooooooo Much")) // Tooooooooooo