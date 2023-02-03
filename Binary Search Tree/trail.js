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

    isEmpty(){
        if(!this.roost){
            return this.root
        }
    }

    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNewnode(this.root, newNode)
        }
    }

    insertNewnode(root, newNode){
        if(newNode.value < root.value){
            if(!root.left){
                 root.left = newNode
            }else{
                this.insertNewnode(root.left, newNode)
            }
        } else {
            if(!root.right){
                root.right =  newNode
            } else {
                this.insertNewnode(root.right, newNode)
            }
        }
    }

    search(root,value){
        if(this.isEmpty()){
            return this.root
        }
        if(root.value === value){
            return true
        }else if (value < root.value){
            return this.search(root.left, value)
        }else {
            return this.search(root.right, value)
        }
    }

    preOrder(roost){
        if(root){
            console.log(root.value)
            this.preOrder(roost.left)
            this.preOrder(roost.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(){
        const queue = []
        while(queue.length){
            queue.push(this.root)
            const curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        } else{
            return this.max(root.right)
        }
    }

}