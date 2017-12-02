var input = [1,6,-5, 7,3]
var target = -2
var target2 = 100


function twoSum(input,target){


var map = {};
var res = [];
for(var i =0;i< input.length;i++){

    map[input[i]] = i;

}

for(var i =0;i< input.length;i++){

    if(target - input[i] in map){
    res.push(i);
    res.push(map[target - input[i]]); 
    console.log(i,input[i],map[input[i]]);    
    return res;
    
    }
    
            

}
   res.push(-1);
   res.push(-1);
   return res;  

}


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