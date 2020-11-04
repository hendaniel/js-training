/**
 * @see http://codeforces.com/contest/918/problem/B
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let [namesLength, commandsLenght] = [null];
let ips = [], names = [], commands = [];

readline.on('line', line => {
    if (!namesLength) {
        [namesLength, commandsLenght] = line.split(' ');
    } else if (names.length < namesLength) {
        let [a, b] = line.split(' ');
        names.push(a);
        ips.push(b);
    } else {
        commands.push(line.split(' '));
        if (commands.length == commandsLenght)
            readline.close();
    }
});

readline.on('close', () => {
    writeFile();
});

const writeFile = () => {
    commands.map(input => {
        let [name, target] = input;
        let origin = names[ips.indexOf(target.split(';')[0])];
        console.log(`${name} ${target} #${origin}`);
    })
};