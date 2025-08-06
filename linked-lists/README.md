# Linked Lists Implementation

A comprehensive singly linked list data structure implementation in JavaScript, providing all essential operations for dynamic data management.

## Overview

This implementation provides a complete singly linked list with a comprehensive set of methods for manipulation, traversal, and data access. The linked list consists of nodes containing data and references to the next node, allowing for efficient insertion and deletion operations.

## Features

### Core Functionality
- **Dynamic Size**: Grows and shrinks dynamically as elements are added/removed
- **Memory Efficient**: Only allocates memory as needed for each node
- **Flexible Insertion**: Add elements at the beginning, end, or any position
- **Search Operations**: Find elements by value or access by index
- **String Representation**: Visual representation of the list structure

### Class Structure

#### LinkedList Class Methods

**Basic Operations:**
- `append(value)` - Add element to the end of the list
- `prepend(value)` - Add element to the beginning of the list
- `insertAt(value, index)` - Insert element at specific index
- `pop()` - Remove and return the last element
- `removeAt(index)` - Remove element at specific index (not yet implemented)

**Access Methods:**
- `getSize()` - Get the number of elements in the list
- `getHead()` - Get the first node
- `getTail()` - Get the last node
- `atIndex(index)` - Get node at specific index

**Search Methods:**
- `contains(value)` - Check if value exists in the list (returns boolean)
- `find(value)` - Find the index of a specific value

**Utility Methods:**
- `toString()` - Convert list to string representation

#### Node Class
Simple node structure for storing data and next reference.

```javascript
export class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
```

## Technical Details

### Internal Structure
The LinkedList maintains a single reference to the head node (`_head`). All operations traverse from the head when needed, maintaining simplicity while providing full functionality.

```javascript
export class LinkedList {
    constructor() {
        this._head = null;
    }
    // ... methods
}
```

### Memory Management
- **Space Complexity**: O(n) where n is the number of elements
- **No Pre-allocation**: Memory is allocated only when nodes are added
- **Automatic Cleanup**: Removed nodes are automatically garbage collected

## Method Implementations

### Append Operation
```javascript
append(value) {
    const newNode = new Node(value);
    if (!this._head) {
        this._head = newNode;
        return;
    }
    let current = this._head;
    while (current.next) {
        current = current.next;
    }
    current.next = newNode;
}
```

### Prepend Operation
```javascript
prepend(value) {
    const newNode = new Node(value);
    newNode.next = this._head;
    this._head = newNode;
}
```

### Insert At Index
```javascript
insertAt(value, index) {
    if (index < 0 || index > this.getSize()) return null;
    if (index === 0) {
        this.prepend(value);
        return;
    }
    const newNode = new Node(value);
    let previous = this.atIndex(index - 1);
    newNode.next = previous.next;
    previous.next = newNode;
}
```

## Usage Examples

### Basic List Operations

```javascript
import { LinkedList } from "./components/LinkedList.js";

const list = new LinkedList();

// Add elements
list.append("dog");
list.append("cat");
list.prepend("snake");
list.append("lion");

console.log(list.toString()); // "(snake) -> (dog) -> (cat) -> (lion) -> null"
console.log(list.getSize());  // 4
```

### Insertion and Access

```javascript
// Insert at specific position
list.insertAt("elephant", 2);
console.log(list.toString()); // "(snake) -> (dog) -> (elephant) -> (cat) -> (lion) -> null"

// Access elements
console.log(list.getHead().value); // "snake"
console.log(list.getTail().value); // "lion"
console.log(list.atIndex(2).value); // "elephant"
```

### Search Operations

```javascript
// Search for elements
console.log(list.contains("cat")); // true
console.log(list.contains("bird")); // false

console.log(list.find("elephant")); // 2
console.log(list.find("bird")); // null
```

### Remove Elements

```javascript
// Remove last element
const removed = list.pop();
console.log(removed.value); // "lion"
console.log(list.toString()); // Updated list without "lion"
```

## Time Complexity

| Operation | Time Complexity | Description |
|-----------|----------------|-------------|
| append    | O(n)           | Must traverse to end |
| prepend   | O(1)           | Direct head insertion |
| insertAt  | O(n)           | May need to traverse to index |
| pop       | O(n)           | Must traverse to second-to-last |
| getSize   | O(n)           | Must count all nodes |
| getHead   | O(1)           | Direct access to head |
| getTail   | O(n)           | Must traverse to end |
| atIndex   | O(n)           | Must traverse to index |
| contains  | O(n)           | May need to check all nodes |
| find      | O(n)           | May need to check all nodes |
| toString  | O(n)           | Must visit all nodes |

## Space Complexity
- **List Storage**: O(n) where n is the number of elements
- **Method Operations**: O(1) additional space for most operations
- **toString Method**: O(n) for building the result string

## Running the Examples

```bash
node linked-lists/index.js
```

This will:
1. Create a new linked list
2. Add several animal names using different methods
3. Insert an element at a specific position
4. Display the final list structure

## String Representation

The `toString()` method creates a visual representation of the list:

```
(snake) -> (dog) -> (elephant) -> (cat) -> (lion) -> null
```

This format clearly shows:
- Each node's value in parentheses
- Arrows indicating the direction of links
- "null" at the end indicating the list termination

## Implementation Highlights

### Boundary Handling
The implementation carefully handles edge cases:
- **Empty List**: All methods properly handle when `_head` is null
- **Single Element**: Operations work correctly with only one node
- **Index Bounds**: `insertAt` and `atIndex` validate index ranges

### Traversal Pattern
Most operations use a common traversal pattern:
```javascript
let current = this._head;
while (current && someCondition) {
    current = current.next;
}
```

### Memory Efficiency
The implementation uses:
- Only one pointer per node (next reference)
- No doubly-linked overhead
- Minimal bookkeeping (only head reference stored)

## Learning Objectives

This implementation demonstrates:

1. **Dynamic Data Structures**: How linked lists grow and shrink at runtime
2. **Pointer Manipulation**: Working with object references in JavaScript
3. **Linear Data Access**: Sequential access patterns vs. random access
4. **Memory Management**: Understanding when and how memory is allocated
5. **Algorithm Efficiency**: Trade-offs between different operations
6. **Edge Case Handling**: Dealing with empty lists and boundary conditions

## Potential Improvements

### Performance Optimizations
- **Size Caching**: Store size as instance variable for O(1) `getSize()`
- **Tail Reference**: Maintain tail pointer for O(1) `append()` and `getTail()`
- **Doubly Linked**: Add previous pointers for efficient backward traversal

### Additional Methods
- `removeAt(index)` - Remove element at specific index
- `reverse()` - Reverse the entire list
- `clear()` - Remove all elements
- `toArray()` - Convert to regular array
- `fromArray(arr)` - Create list from array

### Iterator Support
```javascript
// Potential iterator implementation
*[Symbol.iterator]() {
    let current = this._head;
    while (current) {
        yield current.value;
        current = current.next;
    }
}
```

## Comparison with Arrays

| Feature | Linked List | Array |
|---------|-------------|-------|
| Access by index | O(n) | O(1) |
| Insert at beginning | O(1) | O(n) |
| Insert at end | O(n)* | O(1) |
| Memory usage | Higher | Lower |
| Cache locality | Poor | Good |
| Dynamic size | Yes | Limited |

*O(1) with tail reference optimization

## File Structure

```
linked-lists/
├── README.md              # This documentation
├── index.js              # Usage examples and demonstrations
└── components/
    ├── LinkedList.js     # Main LinkedList class implementation
    └── Node.js           # Node class definition
```

## Example Output

When running the example (`node linked-lists/index.js`), you'll see:

```
(snake) -> (dog) -> (elephant) -> (cat) -> (lion) -> (bison) -> null
```

This shows the final state of the list after all the operations in the example script.
