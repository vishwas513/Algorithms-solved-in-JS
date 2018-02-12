var input = [1,6,-5, 7,3]
var target = -2
var target2 = 100


var twoSum = function(nums, target) {
    
    var map = {};
    
    for(var i = 0;i < nums.length;i++){
        
        map[nums[i]] = i;
        
        
    }
    
    for(var i = 0;i < nums.length;i++){
        
       var temp = target - nums[i];
        
        if(temp in map){
            
            if(i != map[temp])
            return [i, map[temp]];
        }
        
        
    }
    
    return [-1,-1];
};

function threeSum(input,target){
//a + b + c = d

var map = {};
var res = [];
for(var i =0;i< input.length;i++){

    map[input[i]] = i;

}
    
    var i = 0;
    var j = input.length -1;
    
    while(i < j){
    
    
    if(target - input[i] - input[j] in map){
    
    console.log(i,j,map[target - input[i] - input[j]]);
    res.push(i);
    res.push(j);
    res.push(map[target - input[i] - input[j]]);
        return res;
    }
    
    i++;
    j--;    
    }
    
    res.push(-1);
    res.push(-1);
    res.push(-1);
    return res;

}


//console.log(twoSum(input,target));
console.log(threeSum(input,target2));