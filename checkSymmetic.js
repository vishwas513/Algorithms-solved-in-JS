function isTreeSymmetric(t) {

    
   
   if(t === null){
      
      
      return true; 
   }
   
   
   function traverse(left,right){
      
      if(left === null && right === null){
         return true;
      }
       
      if(left !== null && right !== null){
         
         if(left.value !== right.value){
            return false;
         }
         
         return traverse(left.left,right.right) && traverse(left.right,right.left);
         
         
         
      }else {
         return false;
      }
      
      
   }
   return traverse(t.left, t.right);
   
   
}

