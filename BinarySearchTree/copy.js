class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class bst {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root) {
        if(root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }

    }

    postOrder(root) {
        if(root) {
            this.postOrder(this.left)
            this.postOrder(this.right)
            console.log(root.value);
        }
    }

    inOrder(root) {
        if(root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    max(root) {
        if(!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    min (root) {
        if(!root.left) {
            return root.value
        } else {
            return this.min(root.right)
        }
    }
}

const bstt = new bst()


bstt.insert(5)
bstt.insert(10)
bstt.insert(15)
bstt.insert(20)

// console.log('Tree is empty', bstt.isEmpty())

// console.log(bstt.search(bstt.root,20)); 
console.log(bstt.max(bstt.root));