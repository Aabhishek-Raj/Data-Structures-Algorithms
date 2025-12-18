
/**
 * Class representing the Binary Search Tree and its operations.
 */
public class BinarySearchTree {
    /**
     * Class representing a single Node in the BST.
     */
    class Node {
        int data;
        Node left;
        Node right;

        public Node(int item) {
            data = item;
            left = right = null;
        }
    }

    // The root of the BST
    Node root;

    // Constructor to initialize an empty tree
    public BinarySearchTree() {
        root = null;
    }

    // --- 1. INSERTION ---
    // Public wrapper method
    public void insert(int key) {
        root = insertRec(root, key);
    }

    // Recursive helper method for Insertion
    // Returns the new root of the subtree
    private Node insertRec(Node root, int key) {
        // 1. Base Case: If the tree is empty (or we found an empty spot), return a new
        // node.
        if (root == null) {
            root = new Node(key);
            return root;
        }

        // 2. Recursive Case: Traverse down based on the BST rule.
        if (key < root.data) {
            root.left = insertRec(root.left, key);
        } else if (key > root.data) {
            root.right = insertRec(root.right, key);
        }

        // Return the (unchanged) root pointer of this subtree
        return root;
    }

    // --- 2. SEARCH ---
    // Public wrapper method
    public boolean search(int key) {
        return searchRec(root, key) != null;
    }

    // Recursive helper method for Searching
    // Returns the found Node object or null
    private Node searchRec(Node root, int key) {
        // 1. Base Case: If the root is null (not found) or the data matches (found)
        if (root == null || root.data == key) {
            return root;
        }

        // 2. Recursive Case: Traverse based on the BST rule.
        if (key < root.data) {
            return searchRec(root.left, key);
        } else { // key > root.data
            return searchRec(root.right, key);
        }
    }

    // --- 3. TRAVERSALS (Inorder, Preorder, Postorder) ---

    // Public wrapper method for Inorder Traversal
    public void inorder() {
        System.out.print("Inorder: ");
        inorderRec(root);
        System.out.println();
    }

    // Recursive helper method for Inorder Traversal (Left -> Root -> Right)
    private void inorderRec(Node root) {
        if (root != null) {
            inorderRec(root.left);
            System.out.print(root.data + " ");
            inorderRec(root.right);
        }
    }

    // Public wrapper method for Preorder Traversal
    public void preorder() {
        System.out.print("Preorder: ");
        preorderRec(root);
        System.out.println();
    }

    // Recursive helper method for Preorder Traversal (Root -> Left -> Right)
    private void preorderRec(Node root) {
        if (root != null) {
            System.out.print(root.data + " ");
            preorderRec(root.left);
            preorderRec(root.right);
        }
    }

    // Public wrapper method for Postorder Traversal
    public void postorder() {
        System.out.print("Postorder: ");
        postorderRec(root);
        System.out.println();
    }

    // Recursive helper method for Postorder Traversal (Left -> Right -> Root)
    private void postorderRec(Node root) {
        if (root != null) {
            postorderRec(root.left);
            postorderRec(root.right);
            System.out.print(root.data + " ");
        }
    }

    // --- 4. DELETION ---
    // Public wrapper method
    public void deleteKey(int key) {
        root = deleteRec(root, key);
    }

    // Helper to find the smallest value node in a subtree (Inorder Successor)
    private Node minValueNode(Node node) {
        Node current = node;
        // loop down to find the leftmost leaf
        while (current.left != null) {
            current = current.left;
        }
        return current;
    }

    // Recursive helper method for Deletion
    private Node deleteRec(Node root, int key) {
        // 1. Base Case: Tree is empty or key not found
        if (root == null) {
            return root;
        }

        // 2. Recursive search for the node to delete
        if (key < root.data) {
            root.left = deleteRec(root.left, key);
        } else if (key > root.data) {
            root.right = deleteRec(root.right, key);
        }

        // 3. Key found! (root is the node to be deleted)
        else {
            // Case 1 & 2: Node with only one child or no child (leaf)
            if (root.left == null) {
                return root.right;
            } else if (root.right == null) {
                return root.left;
            }

            // Case 3: Node with two children
            // Find the Inorder Successor (smallest in the right subtree)
            Node temp = minValueNode(root.right);

            // Copy the successor's content to this node
            root.data = temp.data;

            // Delete the Inorder Successor from the right subtree
            root.right = deleteRec(root.right, temp.data);
        }

        return root;
    }

    // --- Main Method for Testing ---
    public static void main(String[] args) {
        BinarySearchTree tree = new BinarySearchTree();

        // Insert values
        int[] values = { 50, 30, 20, 40, 70, 60, 80 };
        System.out.print("Inserting: ");
        for (int val : values) {
            tree.insert(val);
            System.out.print(val + " ");
        }
        System.out.println("\n");

        // Traversal Test
        System.out.println("--- Traversal Results ---");
        tree.inorder(); // Output: 20 30 40 50 60 70 80
        tree.preorder(); // Output: 50 30 20 40 70 60 80
        tree.postorder(); // Output: 20 40 30 60 80 70 50

        // Search Test
        System.out.println("\n--- Search Results ---");
        System.out.println("Searching for 40: " + tree.search(40)); // true
        System.out.println("Searching for 99: " + tree.search(99)); // false

        // Deletion Test (Case 3: Node with two children)
        System.out.println("\n--- Deletion Test (50) ---");
        tree.deleteKey(50);
        System.out.println("Inorder after deleting 50:");
        tree.inorder(); // Output: 20 30 40 60 70 80
    }
}
