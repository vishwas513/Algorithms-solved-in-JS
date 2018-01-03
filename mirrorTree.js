function TreeNode(val){

    this.val = val;
    this.left = null;
    this.right = null;

}



var root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(1);
root.right.left = new TreeNode(7);


/*

       5
     4   6
   2  1 7 

        5
     6    4
      7  1 2



*/



function invert(root){

       function traverse(current){
       
           if(current == null){
               return;
           }
           
           var temp = current.left;
           current.left = current.right;
           current.right = temp;
           
           traverse(current.left);
           traverse(current.right);
           
           
       
       }
       traverse(root);
    
    
    return root;
    
}


console.log(invert(root));