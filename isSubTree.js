function isSubtree(t1, t2) {
    //if (!t1 && !t2) return true
    if (!t2) return true
    if (!t1) return false
    
    //t2 is a sub of t1 if
    //t1.left is t2 
    //or
    //t1.right is t2
    if (equal(t1.left, t2) || equal(t1.right, t2)) return true
    else return isSubtree(t1.left,t2) || isSubtree(t1.right, t2)
}


function equal(t1, t2) {
    if (!t1 && !t2) return true
    if (!t1 || !t2) return false
    if (t1.value !== t2.value) return false
    return equal(t1.left,t2.left) && equal(t1.right,t2.right)
}


