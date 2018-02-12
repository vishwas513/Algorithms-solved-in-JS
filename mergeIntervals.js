var sortColors = function(nums) {
    // get count
    let red = 0
    let white = 0
    let blue = 0
    const RED = 0
    const WHITE = 1
    const BLUE = 2
    let len = nums.length
    for (let i = 0; i < len; i++) {
        let val = nums[i]
        if (val == RED) red++
        if (val == WHITE) white++
        if (val == BLUE) blue++
    }
    let i = 0
    while (i < red) {
       nums[i] = RED
       i++ 
    } 
    while (i < (white + red)) {
        nums[i] = WHITE
        i++
    }
    while (i < blue + white + red) {
        nums[i] = BLUE
        i++
    }    
};