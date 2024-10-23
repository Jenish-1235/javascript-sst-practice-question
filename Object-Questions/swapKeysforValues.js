function swapKeys(a) {
    var b = {}

    for(key in a ){
        b[a[key]] = key
    }

    console.log(b)
}

var a = {
    name: "jenu"
    , age:"aa"
}

swapKeys(a)