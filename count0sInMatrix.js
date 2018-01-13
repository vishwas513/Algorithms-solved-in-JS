var matrix = [[0,0,0,1],[0,1,1,1],[0,1,1,1],[0,1,1,1]];


function findZeros(matrix){

    var count = 0;
    
    var min = 0;
    var max = matrix.length - 1;
    
    function traverse(X,Y){
        console.log(X,Y);
        if(matrix[X][Y] == 0){
            count++;
            traverse(X,Y+1);
            
        }
        
        if(X == max){
        
            return;
        }
        
        
        if(matrix[X][Y] == 1){
            X++;
            Y = min;
            traverse(X,Y);
        
        }
        
        
    
    }
    
    traverse(0,0);
    return count;

}

console.log(findZeros(matrix));