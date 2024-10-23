function reverse_string(a) {
    var s = "";
   for(let i = a.length; i >= 0; i--){
    s+= a.charAt(i)
   }

   return s
}

var a = "hello"
console.log(reverse_string(a))