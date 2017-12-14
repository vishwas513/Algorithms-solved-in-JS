class MinHeap{
    constructor(){
        
        this.storage = [];
    }

   size(){
       
       return this.storage.length;
   }
   swap(a,b){
       
       [this.storage[a],this.storage[b]] = [this.storage[b],this.storage[a]];
       
      
   }
   peak(){
       
       return this.storage[0];
   }
   insert(val){
       
       
       this.storage.push(val);
       this.bubbleUp(this.size() - 1);
   }
   bubbleUp(child){
       
       let parent = this.getParent(child);
       console.log(parent,child);
       
       
   }
   getParent(child){
       
       if(child % 2 == 0){
           return (child - 2)/2;
       }
       else {
           return (child -1)/2;
       }
       
   } 
   removePeak(){}
   bubbleDown(){}
   remove(){} 
}



let minHeap = new MinHeap();
minHeap.storage = [5,6,7,8,9];

console.log(minHeap);
minHeap.swap(0,2);
console.log(minHeap);