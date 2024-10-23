function check_palindrome(a) {
    var bool = true;
    for(let i = 0; i < a.length; i++){
        if(a.charAt(i) != a.charAt(a.length - i - 1)) bool = false;
    }

    return bool;
}

console.log(check_palindrome("aaheaa"))