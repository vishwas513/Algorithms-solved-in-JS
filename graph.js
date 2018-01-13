class Graph {
 constructor() {
  // YOUR WORK HERE
     
     this.storage = {};

 }

 // Time Complexity:
 // Auxiliary Space Complexity:
 addVertex(id) {
   // YOUR WORK HERE
     
     this.storage[id] = [];

 }

 // Time Complexity:
 // Auxiliary Space Complexity:
 removeVertex(id) {
   // YOUR WORK HERE
 
 
     if(id in this.storage){
     
       
       
       for(var key in this.storage){
       
       
           var edges = this.storage[key];
       
       
       for(var i = 0;i < edges.length;i++){
           
       
         if(edges[i] == id){
             
             
             var index = edges.indexOf(id);
             
             edges.splice(index,1);
       
       }   
       
       }
         
         
         
         
         
         
       
     
     }
         
    delete this.storage[id];  
    return id;     
     }
 }

 // Time Complexity:
 // Auxiliary Space Complexity:
 addEdge(id1, id2) {
   // YOUR WORK HERE
 
    
 if(id1 in this.storage && id2 in this.storage){
     
     this.storage[id1].push(id2);
     return true;
     
 }
 return false;
 
 
 }

 // Time Complexity:
 // Auxiliary Space Complexity:
 removeEdge(id1, id2) {
   // YOUR WORK HERE
     
     if(id1 in this.storage && id2 in this.storage){
     
     
     var edges = this.storage[id1];
     
     for(var i =0 ;i< edges.length;i++){
     
         
         if(edges[i] == id2){
         
             edges.splice(i,1);
             
             
         
         }
         
     }
         
     
     
     
     return true;
     }else{
         
     return false;
     }
     
     
     
 }

 // Time Complexity:
 // Auxiliary Space Complexity:
 isVertex(id) {
   // YOUR WORK HERE
     
     if(id in this.storage){
     return true;
     }
     return false;
     
     
     
     
    
 }

 // Time Complexity:
 // Auxiliary Space Complexity:
 neighbors(id) {
 // YOUR WORK HERE
     
     if(id in this.storage){
     
     return this.storage[id];
         
     
     }
     return null;
  
}
    
}


