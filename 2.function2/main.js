function table(str){
    var str1=str.split("").reverse().join("")
    return (str==str1);  
}
console.log(table("abcba"));