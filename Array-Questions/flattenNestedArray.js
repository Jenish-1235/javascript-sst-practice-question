var b = Array()

function flattenNestedArray(A) {
    
    for(let i = 0; i <= A.length; i++){
        if (i === A.length) {
            return b
        }
        if (Array.isArray(A[i])) {
            flattenNestedArray(A[i])
        }else{
            b.push(A[i])
        }
    }
}


var c = flattenNestedArray([1,[2,3,4], 5, [1,[2,3,4]]])
console.log(c)