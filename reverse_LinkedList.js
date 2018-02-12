
var reverseList = function(head) {
    var curr = head;
    var prev = null;
    
    while(curr) {
        var next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next; 
    }
    
    return prev;
    
};