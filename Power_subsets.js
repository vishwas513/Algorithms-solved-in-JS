
function subsets(nums){

var result = [];



function traverse(start,end,subset){

result.push(subset);
for(var i = start;i < end;i++){

	subset.push(nums[i]);
	traverse(i + 1, end,subset.slice());
	subset.pop();
}




}

traverse(0,nums.length,[]);
return result;



}



console.log(subsets([1,2,3,4]));