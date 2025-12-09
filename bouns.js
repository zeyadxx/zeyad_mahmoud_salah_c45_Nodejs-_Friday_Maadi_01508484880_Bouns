function findKthPositive(arr,k){
    let missingArr=[]
    let counter=0
    let arrIndex=0
    for(let i=1;counter<k;i++){
        if(arr[arrIndex]===i)
            arrIndex++;
        else{
            missingArr[counter]=i;
            counter++
        }
    }
    return missingArr[k-1]
}
console.log(findKthPositive([1,2,4,5,6],2));
