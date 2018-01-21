var arr = [-1,0,1,2,6,7,9];

function composeRanges(arr){

    var result = [];
    if(arr.length === 0){
        return arr;
    }
    
    for(var i =0;i<arr.length;i++){
    
        if(arr[i] + 1 == arr[i + 1] && arr[i - 1] !== arr[i] - 1){
        
            result.push(arr[i] + "->");
        }else if(arr[i] + 1 !== arr[i + 1] && arr[i - 1] === arr[i] - 1){
        
            result[result.length -1]+=arr[i];
        }else if(arr[i] + 1 !== arr[i + 1] && arr[i - 1] !== arr[i] - 1) {
        
            result.push(arr[i].toString());
        }
        
    
    }

    return result;
    
}

console.log(composeRanges(arr));