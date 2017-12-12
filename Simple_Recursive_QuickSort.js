var arr = [4,5,1,9,23,54,51,3];

console.log(quicksort(arr));

function quicksort(arr){


    function traverse(start,end){
    
        if(start >= end){
        
            return;
        }
        var mid = start; 
        
        for(var i = start;i<end;i++){
        
            if(arr[i] < arr[end]){
            
            [arr[i],arr[mid]] = [arr[mid],arr[i]];
            mid++;    
            }
      
        }
        [arr[mid],arr[end]] = [arr[end],arr[mid]];
        
        traverse(start,mid - 1);
        traverse(mid+ 1,end);
     
    
    }
    traverse(0,arr.length - 1);
    return arr;




}