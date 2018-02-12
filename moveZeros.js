var moveZeroes = function(nums) {
    let count = 0;
    for (i = 0; i < nums.length; i += 1) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            count++;
            i--;
        }
    }
    while (count > 0) {
        nums.push(0);
        count--;
    }
   
};