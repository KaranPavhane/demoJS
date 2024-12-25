function getHighest(arr){
    let high=0;
    for(let i=0; i<arr.length; i++){
        if(high<arr[i]){
            high=arr[i];
        }
    }   

    return high;
}
console.log("Highest Number :: "+getHighest([10,33,24,43,22,14]));