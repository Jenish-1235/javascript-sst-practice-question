function  reverseArray(A) {
    var b = {};
    for(let i = 0; i < A.length; i++){
        b[i] = A[A.length - 1 - i]
    }
    console.log(b)
    return b
}

reverseArray([1,2,3,4])