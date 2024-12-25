function checkPrime(no){
    
    let count=0;
    for(let i=1; i<=no; i++){
        if(no%i===0){
            count++;
        }
    }
    if(count===2){
        return "prime number";
    }else{
        return "not prime";
    }
}
console.log(checkPrime(7));