function mineJoin(...elements) {
    sym = elements[0];
    elements.splice(0,1);
    elements = elements.join();
    reg = /[,]+/g;

    elements = elements.replace(reg, sym);

    return(elements);
}

function mineJoin2(...elements) {
    sym = elements[0];
    out = "";

    for (let i = 1; i < elements.length-1; i++) {
        out += elements[i] + elements[0];
    }

    out += elements[elements.length-1];
    return(out);
}

console.log(mineJoin('!', 1, 0, 5, -11));
console.log(mineJoin2('!', 1, 0, 5, -11));