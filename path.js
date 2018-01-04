function TreeNode(val){

    this.val = val;
    this.left = null;
    this.right = null;

}



var root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
//root.left.right = new TreeNode(1);
//root.right.left = new TreeNode(7);


/*

       5
     4   6
   2  1 7 

        5
     6    4
      7  1 2



*/



function longestPath(root){

       function traverse(current){

           if(current == null){
           
               return 0;
           }
           
           var left = traverse(current.left);
           var right = traverse(current.right);
          
           var maxDepth = left + right + 1;
           
           
           
           return maxDepth;
       
       }
      return traverse(root);
       
    
    //return root;
    
}


console.log(longestPath(root));