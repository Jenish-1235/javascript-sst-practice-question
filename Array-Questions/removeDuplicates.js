function removeDuplicates(A){
    var b = Array();
    for(let i = 0; i < A.length; i++){
        if (!b.includes(A[i])) {
            b.push(A[i])
        }
    }

    console.log(b)
    return b
}

removeDuplicates([1,1,2,2,3,4])