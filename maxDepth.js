function TreeNode(val){

    this.val = val;
    this.left = null;
    this.right = null;

}



var root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(3);

/*
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

          5
        4   3
       2 1 6 7


*/

function maxDepth(root){

    
    
    function traverse(current){
        
        if(current == null){
        
            return 0;
        }
        
        var lDepth = traverse(current.left);
        var rDepth = traverse(current.right);
        
        
        var max = Math.max(lDepth,rDepth) + 1
      //  console.log(Math.max(lDepth,rDepth) + 1);
        
        
        //console.log(lDepth,rDepth);
        
        return max;
    }
    
   return traverse(root);
}

console.log(maxDepth(root));


