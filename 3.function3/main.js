function table(str){
    var list=str.split("");
    var temp="";
    temp=list[0];
    list[0]=list[1];
    list[1]=temp;
    str1=list.join("");
    return (str1); 

}
console.log(table("hello"));