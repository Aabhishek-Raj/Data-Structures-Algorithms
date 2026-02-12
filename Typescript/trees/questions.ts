export class Node<T> {
    value: T
    left: Node<T> | null = null
    right: Node<T> | null = null

    constructor(value: T) {
        this.value = value
    }
}

class BST<T> {
    private root: Node<T> | null = null

    insert(val: T) {
        this.root = this.insertRecc(val, this.root)
    }

    private insertRecc(val: T, current: Node<T> | null) {
        if(current === null) {
            return new Node(val)
        }
        if(val > current.value) {
            current.right = this.insertRecc(val, current.right)
        } else if (val < current.value) {
            current.left = this.insertRecc(val, current.left)
        }

        return current
    }

    print(node: Node<T> | null = this.root, level = 0) {
        if(node === null) return 

        this.print(node.right, level + 1)

        console.log("   ".repeat(level) + node.value)

        this.print(node.left, level + 1)
    }

    public reverseTree() {
        this.root = this.reverseRec(this.root)
    }
    private reverseRec(node: Node<T> | null) {
        if(node === null) return node

        let temp = node.left
        node.left = this.reverseRec(node.right)
        node.right = this.reverseRec(temp)

        return node
    }

}

function invertTree<T>(root: Node<T> | null): Node<T> | null {
        if(root === null) return root

        let temp = root.left
        root.left = invertTree(root.right)
        root.right = invertTree(temp)

        return root
}

// 102. Binary Tree Level Order Traversal
function levelOrder<T>(root: Node<T> | null): T[][] {
    if (!root) return []

    const result: T[][] = []
    const queue: Node<T>[] = [root]

    while(queue.length > 0) {

        const levelSize = queue.length
        const currentLevel: T[] = []

        for(let i = 0; i < levelSize; i++) {
            const node = queue.shift()!

            currentLevel.push(node.value)

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        result.push(currentLevel)
    } 
    return result
    
};



// 04. Maximum Depth of Binary Tree

const bst = new BST()

bst.insert(2)
bst.insert(-23)
bst.insert(33)
bst.insert(82)
bst.insert(13)

console.log(bst)
bst.print()
bst.reverseTree()
bst.print()