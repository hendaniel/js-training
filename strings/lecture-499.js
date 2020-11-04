"use strict";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let [lectureLength, languageWords] = [null];
let wordsA = [], wordsB = [], speech = [];

readline.on('line', line => {
    if (!lectureLength) {
        [lectureLength, languageWords] = line.split(' ');
    } else if (wordsA.length < languageWords) {
        let [a, b] = line.split(' ');
        wordsA.push(a);
        wordsB.push(b);
    } else {
        speech = line.split(' ');
        readline.close();
    }
});

readline.on('close', () => {
    writeNote();
});

const writeNote = () => {
    let result = '';
    speech.map(word => {
        let comparator = wordsB[wordsA.indexOf(word)];
        let shorter = comparator.length < word.length ? comparator : word;
        result += shorter + ' ';
    })
    console.log(result.trim());
};