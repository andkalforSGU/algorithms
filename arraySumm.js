array = [1, [1, 1], 1, "f5dg"];

function sumArr(array) {
    let summ = 0;

    for (let i = 0; i < array.length; i++) {
        let count = 0;

        if (Array.isArray(array[i])) {
            for (let j = 0; j < array[i].length; j++) {
                count += array[i][j];
            }

        } else if (typeof(array[i]) === "string") {
            reg = /[^0-9]+/g;

            if (!(reg.test(array[i][0]))) {
                let j = 0;
            
                while (!(reg.test(array[i][j]))) {
                    count += Number(array[i][j]);
                    
                    j++;
                }
            }

        } else count = array[i];

        summ += count;
    }

    return(summ);
}

console.log(sumArr(array));