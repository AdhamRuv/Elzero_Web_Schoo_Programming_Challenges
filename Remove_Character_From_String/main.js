// First Approach: (regular Expression)
function remove_char_from_ap1(word, c){
    const regex = new RegExp(c, 'ig');
    return word.split(regex).join('');
};

// Testing Ouput
console.log(remove_char_from_ap1("ElddzeroD WebDD ddSchool", "d")) // Elzero Web School
console.log(remove_char_from_ap1("ElxzeroX Web Sxchool", "x")) // Elzero Web School
console.log(remove_char_from_ap1("Elzero@ Web@@ @@School", "@")) // Elzero Web School


// Second Approach: (Filter Method)
function remove_char_from_ap2(word, c){
    return word.split('').filter(letter => letter !== c && letter !== c.toUpperCase()).join('');
};


// Testing Ouput
console.log(remove_char_from_ap2("ElddzeroD WebDD ddSchool", "d")) // Elzero Web School
console.log(remove_char_from_ap2("ElxzeroX Web Sxchool", "x")) // Elzero Web School
console.log(remove_char_from_ap2("Elzero@ Web@@ @@School", "@")) // Elzero Web School