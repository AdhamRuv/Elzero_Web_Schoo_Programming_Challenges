let arr = [1, 10, 15, -2, -5, 0, 'Z', 'A', 8, -30, 5, 'C'];

function getResult(arr){
    let negArr = [];
    let strArr = [];
    let sum;
    for(let i=0; i<arr.length; i++){
        arr[i] < 0 ? negArr.push(arr[i]) : typeof arr[i] === 'string' ? strArr.push(arr[i]) : null;
        sum = arr.reduce((pre, cur)=>{
            return cur >= 0 ? pre + cur : pre;
        }, 0);
    };
    const result = [];
    result.push(sum, negArr.length, strArr.sort().join(''));
    return result;
    // return [sum, negArr.length, strArr.sort().join('')];  Another Way to Make the Result Array
};

// Output
[39, 3, 'ACZ'];
console.log(getResult(arr));