var isCousins = function(root, x, y, level = 0) {
    if(!root) return false
    
    let queue = [root]
    while(queue.length){
        let rowLength = queue.length
        let row = []
        
        while(rowLength > 0) {
            const curr = queue.shift()
            
            if((curr.left && curr.right) && 
                ((curr.left.val === x && curr.right.val === y) || 
                (curr.left.val === y && curr.right.val === x)))
                return false
                
            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
            row.push(curr.val)
            rowLength--
        }
        if(row.includes(x) && row.includes(y)) return true
    }
    
    return false
};
