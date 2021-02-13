const o = {
    a: {
        b: {
            d: {
                g: {
                    t: "profit!",
                }
            },
        },
        c: 42
    },
    z: null
};

function objProp(object, str) {
    str = str.split(".");
    let dom = object;

    for (let i = 0; i < str.length; i++) {
        if (dom[str[i]] != undefined) {
            if (i < str.length - 1) {
                dom = dom[str[i]];
            } else return dom[str[i]];

        } else return undefined;
    }
}

console.log(objProp(o, "a.b.d.g.t"));