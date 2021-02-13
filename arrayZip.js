let array = [1,2,3,4,5,6,7,8,9,0];

function sortFunc(a, b) {
    return(a - b);
}

function arrayZip(array) {
    array = array.sort(sortFunc);
    let out = "";

    for (let i = 0; i < array.length; i++) {
        out += array[i];
        if (array[i+1] === array[i] + 1) {
            out += '-';

            j = i + 1;
            count = array[j];
            while (array[j+1] === array[j]+1) {
                count++;
                j++;
                i++;
            }
            i++;

            out += count + ", ";
        } else out += ", ";
    }
    console.log(out);
}

arrayZip(array);