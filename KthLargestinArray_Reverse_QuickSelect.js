var arr = [3,1,6,4,9,8]
var arr2 = [8,9,4,6,1,3]

var arr3  = [19,4,5,2,3,11]
var k = 3;

function kthLarge(arr,k){

    var res = 0;
    var swapF = false;
    var count = 0;
    
    var pivot = arr.length -1;

    while(count < k){
       // console.log(count,k);
    for(var i = 0;i < pivot;i++){
        //console.log(arr);
        if(arr[i] > arr[pivot]){
            
        swap(arr,i,pivot);
             
            
            
            i = 0;
            
        }
        
        
            
       
    
    }
 
    pivot--;
    count++;
}
    
    
    
    function swap(arr,a,b){
    
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;    
    }


    return arr[i];
}
console.log(kthLarge(arr3,k));