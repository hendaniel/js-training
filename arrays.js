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

console.log(generateArray(5, 3));