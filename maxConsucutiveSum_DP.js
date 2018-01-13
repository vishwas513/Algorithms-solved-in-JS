function maxConsecutiveSum(arr) {
  //YOUR WORK HERE
  //console.log(arr);
    
    if(arr.length == 0){
        return 0;
    }
    
    
    
    
    
    var localMax = arr[0];
    var ultimateMax = arr[0];
    
    
    for(var i = 1;i< arr.length;i++){
        
        console.log(localMax,ultimateMax,arr[i],localMax + arr[i]);
    
    localMax = Math.max(localMax + arr[i],arr[i]);
    ultimateMax = Math.max(localMax,ultimateMax);
    
    console.log("|", localMax, "|", ultimateMax);
    
    
    
    }
    
    
    
    
    
    return ultimateMax;
    
}


function maxConsecutiveSum2(arr) {
  let local = arr[0];
  let ultimate = arr[0];
  for(let i = 1; i < arr.length; i++){
      
    console.log  
    local = Math.max(local + arr[i], arr[i]);
    ultimate = Math.max(local, ultimate);
  }
  return ultimate ? ultimate : 0;
}







var arr = [6,-1,3,5,-10];
var arr2 = [2,3,7,10];

console.log(maxConsecutiveSum(arr));
//console.log(maxConsecutiveSum2(arr));

console.log(maxConsecutiveSum(arr2));
//console.log(maxConsecutiveSum2(arr2));