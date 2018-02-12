var search = function(nums, target) {
  if(nums.length===0){return -1;}
  let n = nums.length;
  let lo=0;
  let hi = n-1;
  while (lo < hi) {
    
    var mid = Math.floor((lo + hi)/2);
    if (nums[mid] > nums[hi]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  let rot=lo;
  lo=0;
  hi=n-1;
  while(lo<=hi){
    mid = Math.floor((lo+hi)/2);
    let realmid = Math.floor((mid+rot)%n);
    if(nums[realmid]==target){return realmid}
    if(nums[realmid]<target){lo = mid+1}
    else{
      hi=mid-1;
    }
  }
  
 return -1 
};