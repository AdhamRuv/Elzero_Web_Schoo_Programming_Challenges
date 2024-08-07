function seq_multi(num, count, exclude){
    let resultArr = [];
    let initialValue = num;
    for(let i=0; i<count; i++){
        resultArr.push(initialValue);
        initialValue = initialValue * initialValue;
    };
    resultArr.splice(resultArr.indexOf(exclude), 1)
    return resultArr;
};

// Test Cases
console.log(seq_multi(2, 5, 256)); // [2, 4, 16, 65536]
console.log(seq_multi(3, 4, 6561)); // [3, 9, 81]