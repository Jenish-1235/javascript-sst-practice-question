function capitalize_words(params) {
    var ans = "";
    for(let i = 0; i < params.length; i++){
        if(i+1<params.length){
        if (i == 0) {
            ans+= params.charAt(i).toUpperCase()
        }else if(params.charAt(i) == " "){
            ans+=" "
            ans += params.charAt(i+1).toUpperCase();
            i++
        }else{
            ans+=params.charAt(i)
        }
        }else{
            ans+= params.charAt(i)
        }
        
    }

    return ans
}

console.log(capitalize_words("hello world , I am jenish"))