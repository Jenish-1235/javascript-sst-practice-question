function filterByKey(a, b) {
    var c = {}

    for(let i = 0; i < b.length; i++){

        for(key in a){
        if (key == b[i] ) {
            c[key] = JSON.parse(JSON.stringify(a[key]))
        }
    }
    }

    console.log(c)
    
}

var a = {
    name:"jenish",
    age:"10",
    dance: "no"
}

filterByKey(a, ["name" , "age"])