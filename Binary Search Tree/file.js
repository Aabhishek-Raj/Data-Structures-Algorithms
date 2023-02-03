check(root){
    if(root.left.value <  root.value){
        return true
    }else if (root.right.value > root.value) {
        return true
    } else {
        return false
    }
}



class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(root){
        this.root = null
    }
    
    
    
    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode 
        }else {
            this.insertNewNode(this.root, newNode)
        }
    }
    
    inserNewNode(root, newNode){
        if(newNode.value < root.value){
            root.left = newNode
            
        }else if (newNode.value > root.value){
            root.right = newNode
        }
    }
}