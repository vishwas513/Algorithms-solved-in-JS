
function TreeNode(val){

    this.val = val;
    this.left = null;
    this.right = null;

}


var t = new TreeNode(10);
t.left = new TreeNode(5);
t.right = new TreeNode(6);
t.left.left = new TreeNode(3);
t.left.right = new TreeNode(4);

var s = 18;
//console.log(t);






function hasPathWithGivenSum(t, s) {

   if (t == null && sum != 0) {
        return false;
    }
    
    if (t == null && sum == 0) {
        return true;
    }
    
    
    function traverse(current,curSum) {
   
        
        if (current === null) {
        return false;
    }
    
    var sum = current.val + curSum;
    
    if (sum === s && !current.left && !current.right) {
        return true;
    }
    
    return traverse(current.left,sum) || traverse(current.right,sum);
}
    
    
    
    
    
    return traverse(t,0);
};


console.log(hasPathWithGivenSum(t, s));

