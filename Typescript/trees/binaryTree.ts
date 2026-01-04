import { nextBoolean, nextInt} from './utils'

class TreeNode<T> {
    public value: T
    public left: TreeNode<T> | null = null
    public right: TreeNode<T> | null = null

    constructor(value: T) {
        this.value = value
    }
}

export class BinaryTree {
    public root: TreeNode<number> | null = null

    public populate(): void {
        console.log("Enter root value:")
        const value = nextInt()
        this.root = new TreeNode(value)
        this.populateNode(this.root)
    }

    private populateNode(node: TreeNode<number>): void {
        console.log(`Do you want to enter left of ${node.value}? (true/false)`)
        if (nextBoolean()) {
            console.log(`Enter left value of ${node.value}:`)
            const value = nextInt()
            node.left = new TreeNode(value)
            this.populateNode(node.left)
        }

        console.log(`Do you want to enter right of ${node.value}? (true/false)`)
        if (nextBoolean()) {
            console.log(`Enter right value of ${node.value}:`)
            const value = nextInt()
            node.right = new TreeNode(value)
            this.populateNode(node.right)
        }
    }

    // Right child is on top
    // Left child is at bottom
    display(node: TreeNode<number> | null = this.root, level = 0): void {
        if (!node) return;

        this.display(node.right, level + 1);

        console.log("    ".repeat(level) + node.value);

        this.display(node.left, level + 1);
    }

    displayPretty(node: TreeNode<number> | null = this.root, prefix = "", isLeft = true): void {
        if (!node) return;

        console.log(prefix + (isLeft ? "├── " : "└── ") + node.value);

        const childPrefix = prefix + (isLeft ? "│   " : "    ");

        if (node.left || node.right) {
            this.displayPretty(node.left, childPrefix, true);
            this.displayPretty(node.right, childPrefix, false);
        }
    }

    public preOrder(node = this.root) {
        if(!node) return
        console.log(node.value + " ")
        this.preOrder(node.left)
        this.preOrder(node.right)
    }

    public inOrder(node = this.root) {
        if(!node) return
        this.inOrder(node.left)
        console.log(node.value + " ")
        this.inOrder(node.right)
    }

    public postOrder(node = this.root) {
        if(!node) return

        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.value, ' ')


    } 
}

const tree = new BinaryTree()
tree.populate()
console.log(tree)
tree.display()
tree.inOrder()
// tree.displayPretty()