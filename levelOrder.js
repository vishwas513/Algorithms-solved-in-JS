var levelOrder = function(root) {
    const ret = [];
    const queue = [];
    
    if (!root) 
        return [];
    
    if (root.left === null && root.right === null) {
        return [[root.val]];
    }
    queue.push(root);
    
    while (queue.length > 0) {
        const level = queue.length;
        const newLevelArr = [];
        for (let i = 0; i < level; i++) {
            const node = queue.shift();
            if (node.left !== null)
                queue.push(node.left);
            if (node.right !== null)
                queue.push(node.right);
            newLevelArr.push(node.val);
        }
        
        ret.push(newLevelArr);
        
    }
    return ret;
    
};