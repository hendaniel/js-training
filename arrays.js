// 1. Create a function called generateArray() that 
// generates an array of random integers, where the 
// length of the array and the maximum random value are 
// defined as parameters. For example, generateArray(5, 3) 
// may generate the array [3, 2, 0, 1, 1]. Random values 
// should be between 0 and the maximum random value inclusive.

const generateArray = (length, max) => {
    // Consider max as integer
    const arr = new Array(length).fill(0);
    return arr.map(item => {
        return item = Math.floor(Math.random() * max + 1);
    })
}

//console.log(generateArray(5, 3));


const capsLocks = (word) => {
    const upperCase = /^[A-ZÑ]+$/g;

    if (upperCase.test(word))
        return word.charAt(0) + word.slice(1).toLowerCase();
    else if (upperCase.test(word.slice(1)) && !upperCase.test(word.charAt(0)))
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    else
        return word;
}

//console.log(capsLocks("dANIEL"))


const giveChange = (change) => {
    const two = change < 4 ? change >> 1 : [0, 3, 1, 4, 2][Math.floor(change) % 5],
        rest = change - two * 2;

    return {
        two: two,
        five: Math.floor((rest % 10) / 5),
        ten: Math.floor(rest / 10),
    };
}

console.log(giveChange(1083));