

function combinationSum(candidates,target){
    
    var result = []
    var path = [];
    candidates.sort(numSort);
    dfs(candidates,target,0,path,result);
    
    function dfs(nums,target,index,path, result){
        
        if(target < 0){
        
            return;
        }
        if(target == 0){
            
            result.push([path]);
            return;
        }
        
        for(var i = index;i< nums.length;i++){
            
            dfs(nums,target- nums[i],i,path+nums[i]+",",result);
        
        }
        
    
    }

    return result;
    

}

function numSort(a,b){

    return a - b;
}

var candidates = [2,3,4,5,6];
var target = 8;

console.log(combinationSum(candidates,target));

