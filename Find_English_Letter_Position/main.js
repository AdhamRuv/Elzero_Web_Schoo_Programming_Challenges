// First Approach:
function find_position_for_ap1(letter){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return alphabet.indexOf(letter)+1;
}
console.log(find_position_for_ap1('b'));

// Second Approach:
function find_position_for_ap2(letter){
    let alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    alphabet.indexOf(letter)+1;
};
console.log(find_position_for_ap2('a'));