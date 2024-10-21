function sumOfElements(A) {
    var sum = 0;
    for(let i = 0 ; i < A.length; i++){
        sum+=A[i]
    }

    console.log(sum)
    return sum
}


sumOfElements([1,2,3,4,5])