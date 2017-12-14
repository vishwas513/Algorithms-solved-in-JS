//// 1. Converting a sorted array into a balanced BST
// 2. Finding the diameter of a Binary Tree 
// 3. Maximum Sum Path to node in Binary Tree


// input: [1,2, 3, 4, 5, 57, 60, 85, 90, 94, 97, 100]
//         s       m      m              m         e 
// output:                 



//           57
//        /     \ 
//       4       94
//      / \     /  \
//                  100
//     2   5.  85   /
//    / \      / \ 97
//   1   3    60 90
//  
// 
//        
//    

// check balanced tree 
// return true if balanced, false if not 

//helper(left count )

// return 0;

// isValid = true 
// hit base condition: if node is null 
// compare height - 1 to max height 
// if max height > height - 1 - 1
//        isValid = false 
//        return 


// return isValid 







// var lh = 


// 




var array = [1,2, 3, 4, 5, 57, 60, 85, 90, 94, 97, 100];

function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }




function arraytoBST(array){

    var start = 0;
    var end = array.length - 1;
    
    
    
    
    
    function traverse(start,end){
    
        if(start > end){
            return null;
        }
       
        
      
        var mid = Math.floor((start + end) / 2);
        var node = new TreeNode(array[mid]);
        
        node.left = traverse(start, mid - 1);
        
        node.right = traverse(mid + 1, end);
        
        return node;
    
    }
  
   var node = traverse(start,end);
   return node;

}

 function preOrder(node) {
        if (node == null) {
            return null;
        }
        console.log(node.val + " ");
        preOrder(node.left);
        preOrder(node.right);
    }


var tree = arraytoBST(array);

console.log(tree);

preOrder(tree);



