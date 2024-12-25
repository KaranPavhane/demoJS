function getFact(no){
    let i=1;
    let sum=1;
    while(i<=no){
        sum=sum*i;
        i++;
    }
    return sum;
}

console.log("factorial : "+getFact(5));