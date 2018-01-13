function steps(n){

    var cache = {};
    
    function climb(n){
    
        if(n in cache){
        
            return cache[n];
        }
        
        if(n == 0){
        
            return 1; 
        
        }
        if(n == 1){
        
            return 1; 
        
        }
        if(n == 2){
        
            return 2;
        
        }
        
        return climb(n - 1) + climb(n - 2) + climb(n - 3);
    
    
    }
    
    return climb(n);


}

console.log(steps(6));