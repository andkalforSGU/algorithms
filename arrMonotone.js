array = [0, 2, 1, 5, 9, 9, 15];

function isMonotone(array) {
     let count = 0;

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] == array[i+1]) {
            continue;
        } else if (array[i] > array[i+1]) {
            count++;
        }
    }

    if (count == 0) {
        return(true);
    } else if (count == array.length - 1) {
        return(true);
    } else return(false);
}

console.log(isMonotone(array));