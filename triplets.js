var arr = [-12, -7, -4, 0, 3, 5, 9, 10, 15, 16] 

//a - b = c

//a = c + b

//15 - 10 = 5



function triplets(arr){

    var map = {};
    var resArr= [];
    
    for(var i = 0;i< arr.length;i++){
    
        map[arr[i]] = 1;
        
    }
    
    
    var start = 0;
    var end = arr.length - 1;
    
    
    while(end > 0){
    
        
        if(start == end){
        
            start = 0;
            end --;
        
        }
        
        
        if((arr[start] - arr[end]) in map){
            
            var object = [arr[start],arr[end],(arr[start] - arr[end])];
            //console.log(object);
            resArr.push(object);
            
        }
        
        
         if((arr[end] - arr[start]) in map){
            
            var object = [arr[start],arr[end],(arr[start] - arr[end])];
            //console.log(object);
             
             if(arr[start] != 0 && arr[end] != 0){
            resArr.push(object);
            }
        } 
        
        
        start++;
        
        
    
    
    }

    
    
    
    return resArr;
    
    

}

console.log(triplets(arr));