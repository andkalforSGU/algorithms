let str="Eva, can I see ЙbЙees in a cave?";

function palindrom(str) {
    str = str.toLowerCase();
    let reg = /[^a-zA-Z0-9а-яА-Я]+/ug;

    str = str.replace(reg, '');
    flag = false;

    for (let i = 0; i < str.length/2; i++) {
        console.log(str[i]+' '+str[str.length-i-1]);
        if (str[i] != str[str.length-i-1]){
            return(false);
        }
    }

    return(true);
}

console.log(palindrom(str));
