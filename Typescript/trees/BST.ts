class TreeNode {
    public value: number
    public left: TreeNode | null = null
    public right: TreeNode | null = null
    public height: number = 1 // height of leaf node = 1
    constructor(val: number) {
        this.value = val
    }
}

export class BinarySearchTree {
    private root: TreeNode | null = null
    // constructor() {
    //     this.root = null
    // }

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

        return node
    }

    private getHeight(node: TreeNode | null): number {
        return node ? node.height : 0
    }

    display(node: TreeNode | null = this.root, detail: string = "Root node: ") {
        if (!node) return

        console.log(detail + node.value)
        this.display(node.left, "Left child of " + node.value + " : ")
        this.display(node.right, "Right child of " + node.value + " : ")
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

const bst = new BinarySearchTree()
const nums = [5, 2, 7, 1, 4, 6, 9, 8, 3, 10]
const sorted = [1, 2, 3, 4,5, 6, 7, 8, 9, 10]
// bst.populate(nums)
bst.populateSorted(sorted)
bst.display()