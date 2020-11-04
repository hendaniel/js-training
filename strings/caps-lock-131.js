/**
 * @see http://codeforces.com/contest/131/problem/A
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.on('line', line => {
    readline.close(), console.log(capsLocks(line));
});
const capsLocks = (word) => {
    const upperCase = /^[A-ZÑ]+$/g;

    if (word.length > 1) {
        const first = word.charAt(0);
        const last = word.slice(1);

        if (upperCase.test(word))
            return word.toLowerCase();
        else if (upperCase.test(last) && !upperCase.test(first))
            return first.toUpperCase() + last.toLowerCase();
        else
            return word;
    }
    else
        if (!upperCase.test(word))
            return word.toUpperCase();
        else
            return word.toLowerCase();
}