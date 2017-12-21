function TreeNode(val){

    this.val = val;
    this.left = null;
    this.right = null;

}



var root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(3);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
/*
          5
        4   3
       2 1 6 7


*/

function countLeaves(root){

    var count = 0;
    
    function traverse(current){
    if(current.left == null && current.right == null){
    
        count++;
        return;
    
    }
    
    if(current.left == null || current.right == null){
       
        count++;
        return;
    }
        
        
        traverse(current.left);
        traverse(current.right);
    
       return count; 
    }
    
   return traverse(root);
}

console.log(countLeaves(root));


