function methPalindrom(str) {
    str = str.toLowerCase().replace(/\W/g, "");
    revStr = str.split('').reverse().join('');
    return str == revStr;
}

console.log(methPalindrom("As!!!d ,,Fg  fds a"));
