var reverseKGroup = function(head, k) {
    var cur = head;
    var pre = null;
    var post = null;
    var count = 0;
    
    while(cur !== null && count < k) {
        cur = cur.next;
        count++;   
    }
    
    if(count !== k) {
        return head;
    }
    
    cur = head;

    while(cur !== null && count > 0) {
        post = cur.next;
        cur.next = pre;
        pre = cur;
        cur = post;
        count--;
    }
    
    
    if(post !== null) {
        head.next = reverseKGroup(post, k);
    }
    
    return pre;
};