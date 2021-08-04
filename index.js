// LOLOLOLOL

const readline = require('readline');
const mr = require ('./structure/menuRender.js');
const mls = require ('./structure/multi_line_strings.js');
const mfa = require ('./structure/menu_function_arrays.js');

readline.emitKeypressEvents(process.stdin);
console.clear();
process.stdin.setRawMode(true);
console.clear();
let menu1 = mr.createMenu(mls.menu2);
console.clear();

process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
        process.exit();
    } else {
        mr.processKey(key, menu1, mfa.menu1);
    }
});