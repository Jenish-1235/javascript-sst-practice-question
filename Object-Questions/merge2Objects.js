function mergeObjects(a,b) {
    var c = {...a, ...b}
    return c
}

var a = {
    name: "dog",
    type: "labra"
}

var b = {
    food: "milk",
    height: "2.3"
}

var x = mergeObjects(a,b)
console.log(x)