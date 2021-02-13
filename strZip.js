function strZip(str) {
    str = str.split('');

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i+1]) {
            let count = 2;
            while (str[i] === str[i+count]) {
                count ++;
            }

            str[i+1] = count;
            str.splice(i+2, count-2);
        } else continue;
    }

    str = str.join('');
    console.log(str);
}

strZip("AAABbbbBcCCC");