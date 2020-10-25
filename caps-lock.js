"use strict";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.on('line', line => {
    readline.close(), console.log(capsLocks(line));
});
const capsLocks = (word) => {
    const upperCase = /^[A-ZÑ]+$/g;

    if (word.length > 1)
        if (upperCase.test(word))
            return word.toLowerCase();
        else if (upperCase.test(word.slice(1)) && !upperCase.test(word.charAt(0)))
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        else
            return word;
    else
        if (!upperCase.test(word))
            return word.toUpperCase();
        else
            return word.toLowerCase();
}