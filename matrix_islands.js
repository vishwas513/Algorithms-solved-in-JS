let test = [[1,1,0,0,1],
            [0,1,0,0,1],
            [1,1,0,0,0],
            [0,0,1,0,0],
            [1,1,0,0,0]]

// x: 1
// y: 3
// test[3][1]

function islands(matrix){
    
    var count = 0;
    function traverse(x, y,count){
        
        if (x < 0 || y < 0 || x >= matrix[0].length || y >= matrix.length){
            return;
        } else if(matrix[y][x] === 0){
          
            
            
            return;
        
        }else if(matrix[y][x] === 0 && matrix[y][x+1] === 0){
            
            
            traverse(x+1,y,count);
            
            
        }else if(matrix[y][x] === 0 && matrix[y][x -1] === 0){
            
            
            traverse(x-1,y,count);
            
            
        }else if(matrix[y][x] === 0 && matrix[y+1][x] === 0){
            
            
            traverse(x,y+1,count);
            
            
        }else if(matrix[y][x] === 0 && matrix[y-1][x] === 0){
            
            
            traverse(x,y-1,count);
            
            
        }
        
        if(matrix[y][x] == 1){
            count++;
            matrix[y][x] = 0;
            console.log(x + '_' + y);
            
            traverse(x,y-1,count);
            traverse(x+1,y,count);
            traverse(x,y + 1,count);
            traverse(x-1, y,count);
            
            
        }
        
        
        let object = {"X":x,"Y":y};
    
        return count;
    }
    
    console.log(traverse(0, 0,count));
    
    
}

islands(test);

// x_y
// 0_0,1_0,1_1,1_2,0_2



