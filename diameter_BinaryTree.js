function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
 
 var root = new TreeNode(1);
 root.left = new TreeNode(2);
 root.right = new TreeNode(3);
 root.left.left = new TreeNode(4);
 root.left.right = new  TreeNode(5);
 
 


var diameterOfBinaryTree = function(root) {
    var maxDiameter = 0;


    function traverse(current){
    
        if(current === null){
        
            return 0;
        }
        console.log(current.val);
        var leftDepth = traverse(current.left);
        var rightDepth = traverse(current.right);
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
        
    
        var maxDepth = Math.max(leftDepth,rightDepth) + 1;
        return maxDepth;
        
    }
     if (root === null) return 0;




   traverse(root);
   return maxDiameter;



    
    };
    
diameterOfBinaryTree(root);    
    
    