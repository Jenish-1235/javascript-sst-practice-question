function count_vowels(a) {
    var count = 0;

    for(let i = 0; i < a.length; i++){
        var char = a.charAt(i);
        if (char == "a" || char == "e" || char =="i" || char == "o" || char == "u"){
            count+=1;
        }
    }

    return count;
}

console.log(count_vowels("hello"))