# Binary Search Trees Implementation

A comprehensive Binary Search Tree (BST) implementation in JavaScript featuring balanced tree construction, multiple traversal methods, and dynamic rebalancing capabilities.

## Overview

This implementation provides a fully functional Binary Search Tree with automatic balancing, duplicate handling, and various tree operations. The BST is built from an array and maintains balance through rebalancing operations.

## Features

### Core Functionality

- **Balanced Tree Construction**: Automatically builds balanced BST from sorted arrays
- **Duplicate Handling**: Automatically removes duplicates during construction
- **Dynamic Operations**: Insert, delete, and search operations
- **Multiple Traversals**: Inorder, preorder, postorder, and level-order traversals
- **Tree Balancing**: Manual rebalancing capability
- **Tree Visualization**: Pretty-print functionality for visual representation

### Class Structure

#### Tree Class Methods

**Static Methods:**

- `mergeSort(arr, left, right)` - In-place merge sort implementation
- `merge(arr, left, mid, right)` - Merge helper for merge sort

**Instance Methods:**

- `constructor(array)` - Creates BST from array, removes duplicates, sorts, and builds balanced tree
- `checkDuplicates(arr)` - Checks and removes duplicate values
- `removeDuplicates(set)` - Converts set back to sorted array and builds tree
- `buildTree(start, end)` - Recursively builds balanced BST
- `insert(value, node)` - Inserts new value maintaining BST properties
- `deleteItem(value, node)` - Deletes node with given value
- `find(value, node)` - Searches for node with specific value
- `inorder(node, arr)` - Inorder traversal (Left → Root → Right)
- `preorder(node, arr)` - Preorder traversal (Root → Left → Right)
- `postorder(node, arr)` - Postorder traversal (Left → Right → Root)
- `levelOrder(root)` - Level-order (breadth-first) traversal
- `getSuccessor(curr)` - Finds inorder successor for deletion
- `getPredecessor(curr)` - Finds inorder predecessor
- `rebalance()` - Rebalances the entire tree

#### Node Class

Simple node structure with `data`, `left`, and `right` properties.

```javascript
export class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
```

## Technical Details

### Tree Construction Algorithm

1. **Remove Duplicates**: Convert array to Set to eliminate duplicates
2. **Sort Array**: Use merge sort for O(n log n) sorting
3. **Build Balanced Tree**: Use divide-and-conquer to create balanced BST

```javascript
buildTree(start, end) {
    if (start > end) return null;

    let mid = start + Math.floor((end - start) / 2);
    let root = new Node(this.array[mid]);

    root.left = this.buildTree(start, mid - 1);
    root.right = this.buildTree(mid + 1, end);

    return root;
}
```

### Traversal Methods

**Inorder Traversal** (Left → Root → Right):

- Results in sorted order for BST
- Used for tree validation and sorted output

**Preorder Traversal** (Root → Left → Right):

- Useful for tree serialization
- Creates tree structure representation

**Postorder Traversal** (Left → Right → Root):

- Useful for tree deletion
- Children processed before parent

**Level-order Traversal** (Breadth-first):

- Processes nodes level by level
- Returns 2D array with each level as separate array

## Usage Examples

### Basic Tree Creation and Operations

```javascript
import { Tree } from "./components/Tree.js";

// Create tree from array (duplicates will be removed)
const unsortedArr = [12, 6, 3, 1, 8, 6, 96, 47, 10, 75, 72, 32, 31, 44, 43, 18];
const tree = new Tree(unsortedArr);

// Insert new values
tree.insert(100);
tree.insert(25);

// Search for values
const foundNode = tree.find(47);
console.log(foundNode ? "Found" : "Not found");

// Delete values
tree.deleteItem(96);

// Get different traversals
console.log("Inorder:", tree.inorder()); // Sorted order
console.log("Preorder:", tree.preorder()); // Root first
console.log("Postorder:", tree.postorder()); // Root last
console.log("Level-order:", tree.levelOrder(tree.root)); // By levels
```

### Tree Visualization

```javascript
// Pretty print function (from app.js)
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) return;

  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint(tree.root);
```

### Dynamic Balancing

```javascript
// Add multiple values and rebalance
tree.insert(101);
tree.rebalance();
tree.insert(102);
tree.rebalance();
tree.insert(103);
tree.rebalance();

// The tree maintains balance after each rebalance operation
```

## Time Complexity

| Operation | Average Case | Worst Case | Best Case |
| --------- | ------------ | ---------- | --------- |
| Search    | O(log n)     | O(n)       | O(1)      |
| Insert    | O(log n)     | O(n)       | O(1)      |
| Delete    | O(log n)     | O(n)       | O(1)      |
| Traversal | O(n)         | O(n)       | O(n)      |
| Rebalance | O(n)         | O(n)       | O(n)      |

_Note: Worst case O(n) occurs when tree becomes skewed (like a linked list)_

## Space Complexity

- **Tree Storage**: O(n) for storing n nodes
- **Recursion Stack**: O(log n) for balanced tree, O(n) for skewed tree
- **Traversal Arrays**: O(n) for storing traversal results

## Running the Examples

```bash
node binary-search-trees/app.js
```

This will:

1. Create a BST from an unsorted array
2. Perform multiple insertions with rebalancing
3. Display the final tree structure using pretty print
4. Demonstrate the level-order traversal reference

## Implementation Highlights

### Automatic Duplicate Removal

```javascript
checkDuplicates(arr) {
    const newSet = new Set(arr);
    if (newSet.size === arr.length) {
        // No duplicates found
        Tree.mergeSort(this.array, 0, this.array.length - 1);
        this.root = this.buildTree(0, this.array.length - 1);
        return true;
    }
    this.removeDuplicates(newSet);
    return false;
}
```

### Balanced Tree Construction

The tree is built using the middle element as root to ensure balance:

- Left subtree contains elements smaller than root
- Right subtree contains elements larger than root
- Recursively applied to all subtrees

### Deletion with Successor/Predecessor

The implementation handles three deletion cases:

1. **Leaf Node**: Simply remove the node
2. **One Child**: Replace node with its child
3. **Two Children**: Replace with inorder successor and delete successor

## Learning Objectives

This implementation demonstrates:

1. **Tree Construction**: Building balanced BSTs from arrays
2. **Tree Traversals**: Different ways to visit tree nodes
3. **BST Properties**: Maintaining left < root < right invariant
4. **Dynamic Operations**: Insertion and deletion in BSTs
5. **Tree Balancing**: Keeping trees balanced for optimal performance
6. **Recursion in Trees**: Recursive algorithms for tree operations

## Potential Improvements

- **Self-Balancing**: Implement AVL or Red-Black tree properties for automatic balancing
- **Iterator Support**: Add support for for...of loops
- **Height Calculation**: Add methods to calculate and track tree height
- **Validation**: Add BST property validation methods
- **Serialization**: Add methods to serialize/deserialize trees
- **Path Finding**: Add methods to find paths between nodes

## File Structure

```txt
binary-search-trees/
├── README.md              # This documentation
├── app.js                # Usage examples and tree visualization
└── components/
    ├── Tree.js           # Main BST implementation
    └── Node.js           # Node class definition
```

## Example Output

When running the example, you'll see a tree structure like:

```txt
The value 100 goes into right subtree.
The value 100 goes into right subtree.
The value 100 goes into right subtree.
The value 100 goes into right subtree.
No current root. Creating new Node with the value 100...
The tree is balanced. Not proceeding...
The value 101 goes into right subtree.
The value 101 goes into right subtree.
The value 101 goes into right subtree.
The value 101 goes into right subtree.
The value 101 goes into right subtree.
No current root. Creating new Node with the value 101...
The tree is unbalanced. Proceeding with rebalancing...
The value 30 goes into left subtree.
The value 30 goes into right subtree.
The value 30 goes into right subtree.
The value 30 goes into right subtree.
The value 30 goes into left subtree.
No current root. Creating new Node with the value 30...
The tree is unbalanced. Proceeding with rebalancing...
The value 102 goes into right subtree.
The value 102 goes into right subtree.
The value 102 goes into right subtree.
The value 102 goes into right subtree.
The value 102 goes into right subtree.
No current root. Creating new Node with the value 102...
The tree is unbalanced. Proceeding with rebalancing...
The value 103 goes into right subtree.
The value 103 goes into right subtree.
The value 103 goes into right subtree.
The value 103 goes into right subtree.
The value 103 goes into right subtree.
No current root. Creating new Node with the value 103...
The tree is unbalanced. Proceeding with rebalancing...
The value 105 goes into right subtree.
The value 105 goes into right subtree.
The value 105 goes into right subtree.
The value 105 goes into right subtree.
The value 105 goes into right subtree.
No current root. Creating new Node with the value 105...
The tree is unbalanced. Proceeding with rebalancing...
│               ┌── 105
│           ┌── 103
│       ┌── 102
│       │   │   ┌── 101
│       │   └── 100
│   ┌── 96
│   │   │       ┌── 75
│   │   │   ┌── 72
│   │   └── 47
│   │       └── 44
└── 43
    │           ┌── 32
    │       ┌── 31
    │   ┌── 30
    │   │   │   ┌── 18
    │   │   └── 12
    └── 10
        │       ┌── 8
        │   ┌── 6
        └── 3
            └── 1
```
