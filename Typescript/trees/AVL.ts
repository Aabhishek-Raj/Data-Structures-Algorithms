class TreeNode {
    public value: number
    public left: TreeNode | null = null
    public right: TreeNode | null = null
    public height: number = 1 // height of leaf node = 1
    constructor(val: number) {
        this.value = val
    }
}

export class AVL {
    private root: TreeNode | null = null

    // Right Rotation (LL case)
    private rightRotate(y: TreeNode): TreeNode {
        // x becomes new root
        const x = y.left!
        const T2 = x.right

        // Perform rotation
        x.right = y
        y.left = T2

        // Update heights
        y.height = 1 + Math.max(
            this.getHeight(y.left),
            this.getHeight(y.right)
        )

        x.height = 1 + Math.max(
            this.getHeight(x.left),
            this.getHeight(x.right)
        )

        // Return new root
        return x
    }

    // Left Rotation (RR case)
    private leftRotate(x: TreeNode): TreeNode {
        // y becomes new root
        const y = x.right!
        const T2 = y.left

        // Perform rotation
        y.left = x
        x.right = T2

        // Update heights
        x.height = 1 + Math.max(
            this.getHeight(x.left),
            this.getHeight(x.right)
        )

        y.height = 1 + Math.max(
            this.getHeight(y.left),
            this.getHeight(y.right)
        )

        // Return new root
        return y
    }


    public insert(value: number): void {
        this.root = this.insertRecursion(value, this.root)
    }

    private insertRecursion(value: number, node: TreeNode | null): TreeNode {
        if (node === null) {
            return new TreeNode(value)
        }

        if (value < node.value) {
            node.left = this.insertRecursion(value, node.left)
        } else if (value > node.value) {
            node.right = this.insertRecursion(value, node.right)
        }

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))

        // balance & rotate
        return this.rotate(node)
    }

    private rotate(node: TreeNode): TreeNode {
        const balance = this.getBalance(node)

        //  Left Left Case
        if (balance > 1 && this.getBalance(node.left) >= 0) {
            return this.rightRotate(node)
        }

        //  Left Right Case
        if (balance > 1 && this.getBalance(node.left) < 0) {
            node.left = this.leftRotate(node.left!)
            return this.rightRotate(node)
        }

        //  Right Right Case
        if (balance < -1 && this.getBalance(node.right) <= 0) {
            return this.leftRotate(node)
        }

        //  Right Left Case
        if (balance < -1 && this.getBalance(node.right) > 0) {
            node.right = this.rightRotate(node.right!)
            return this.leftRotate(node)
        }

        // No rotation needed
        return node
    }


    private getHeight(node: TreeNode | null): number {
        return node ? node.height : 0
    }

    // Balance factor = height(left) - height(right)
    private getBalance(node: TreeNode | null): number {
        if (!node) return 0
        return this.getHeight(node.left) - this.getHeight(node.right)
    }

     public populate(nums: number[]) {
        for (let i in nums) {
            this.insert(nums[i])
        }
    }

    public populateSorted(nums: number[]) {
        this.root = this.populateSortedRec(nums, 0, nums.length - 1)
    }

    private populateSortedRec(nums: number[], start: number, end: number): TreeNode | null {

        if (start > end) return null

        const mid = Math.floor(start + (end - start) / 2)

        const newNode = new TreeNode(nums[mid])

        newNode.left = this.populateSortedRec(nums, start, mid - 1)
        newNode.right = this.populateSortedRec(nums, mid + 1, end)

        newNode.height = 1 + Math.max(
            this.getHeight(newNode.left),
            this.getHeight(newNode.right)
        )
        return newNode
    }

    display(node: TreeNode | null = this.root, detail: string = "Root node: ") {
        if (!node) return

        console.log(detail + node.value)
        this.display(node.left, "Left child of " + node.value + " : ")
        this.display(node.right, "Right child of " + node.value + " : ")
    }

    isEmpty() {
        return this.root === null
    }

    height() {
        if(!this.root) return -1
        return this.root.height
    }

    isBalanced(node: TreeNode | null): boolean {
        if (!node) return true

        const leftHeight = this.getHeight(node.left)
        const rightHeight = this.getHeight(node.right)

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false
        }

        return this.isBalanced(node.left) && this.isBalanced(node.right)
    }
}

const avl = new AVL()

for(let i = 0; i < 1000; i++) {
    avl.insert(i)
}
console.log(avl.height())