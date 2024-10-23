function deepCloneObject(a) {
    var b = JSON.parse(JSON.stringify(a))
    return b
}

var a = {
    name: "a",
    age: "10"
}

console.log(deepCloneObject(a))
