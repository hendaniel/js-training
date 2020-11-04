"use strict";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = null;
let genome = [];
let map = {
    'A': 0,
    'C': 0,
    'G': 0,
    'T': 0,
    '?': 0
};

readline.on('line', line => {

    if (!n)
        n = line;
    else {
        genome = line.split('');
        readline.close();
    }
})

readline.on('close', () => {

    genome.map(char => {
        map[char] = ++map[char];
    })

    let max = n / 4;

    let word = genome.join('');

    Object.keys(map).forEach(key => {
        if (key === '?') return;
        while (map['?'] > 0 && map[key] < max) {
            map[key] = ++map[key];
            map['?']--;
            word = word.replace('?', key);
        }
    })

    let cumple = true;
    Object.keys(map).forEach(key => {
        if (key !== '?' && map[key] < max) {
            cumple = false;
        }
    })
    if (word.includes('?') || !cumple)
        return console.log('===');
    console.log(word);
})