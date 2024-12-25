function getReverse(str){
    let s='';
    for(let i=0; i<str.length; i++){
        s=s+str.charAt(str.length-1-i);
    }
    return s;
}
console.log(getReverse("Karan"));