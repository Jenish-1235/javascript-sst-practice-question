function countProperties(a) {
    var count  = 0;
    for(key in a){
        count++
    }
    return count
}

var a = {
    name: "A",
    age: "3"
}

console.log(countProperties(a))