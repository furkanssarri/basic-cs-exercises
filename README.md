# Basic Computer Science Exercises

A comprehensive collection of fundamental computer science exercises and implementations in JavaScript. This repository contains practical implementations of essential data structures, algorithms, and programming concepts commonly used in computer science and software development.

## Project Structure

```
basic-cs-exercises/
├── README.md                    # Main project documentation
├── hash-maps/                   # HashMap implementation
│   ├── README.md               # HashMap specific documentation
│   ├── app.js                  # HashMap usage examples
│   └── components/
│       └── HashMap.js          # HashMap class implementation
├── recursion/                   # Recursive algorithms
│   ├── README.md               # Recursion specific documentation
│   └── app.js                  # Fibonacci and merge sort implementations
├── binary-search-trees/         # Binary Search Tree implementation
│   ├── README.md               # BST specific documentation
│   ├── app.js                  # BST usage examples and tree visualization
│   └── components/
│       ├── Tree.js             # BST class implementation
│       └── Node.js             # Node class for BST
└── linked-lists/                # Linked List implementation
    ├── README.md               # Linked List specific documentation
    ├── index.js                # Linked List usage examples
    └── components/
        ├── LinkedList.js       # LinkedList class implementation
        └── Node.js             # Node class for linked lists
```

## Technologies Used

- **Language**: JavaScript (ES6+)
- **Module System**: ES6 Modules
- **Runtime**: Node.js (or modern browsers)

## Data Structures Implemented

### 1. Hash Maps
A custom hash map implementation with collision handling, dynamic resizing, and load factor management.

**Features:**
- Hash function using prime numbers
- Dynamic resizing at 75% load factor
- Complete CRUD operations
- Key/value/entry iteration methods

### 2. Linked Lists
A singly linked list implementation with comprehensive manipulation methods.

**Features:**
- Append/prepend operations
- Insert/remove at specific indices
- Search and traversal methods
- String representation

### 3. Binary Search Trees
A self-balancing binary search tree with various traversal methods.

**Features:**
- Balanced tree construction
- Insert/delete operations
- Multiple traversal methods (inorder, preorder, postorder, level-order)
- Tree visualization utilities
- Automatic rebalancing

### 4. Recursive Algorithms
Implementations of classic recursive algorithms.

**Includes:**
- Fibonacci sequence calculation
- Merge sort algorithm

## Getting Started

### Prerequisites
- Node.js (version 14 or higher for ES6 module support)
- OR a modern web browser with ES6 module support

### Running the Examples

Each directory contains example files that demonstrate the usage of the implemented data structures:

```bash
# Navigate to project directory
cd basic-cs-exercises

# Run HashMap examples
node hash-maps/app.js

# Run Linked List examples
node linked-lists/index.js

# Run BST examples
node binary-search-trees/app.js

# Run recursion examples
node recursion/app.js
```

## Learning Objectives

This repository is designed to help understand:

- **Data Structure Design**: How to implement fundamental data structures from scratch
- **Algorithm Analysis**: Time and space complexity considerations
- **Object-Oriented Programming**: Class-based design patterns in JavaScript
- **Recursive Thinking**: Breaking down problems into smaller subproblems
- **Memory Management**: Understanding how data structures manage memory
- **Hash Functions**: Designing effective hash functions and handling collisions
- **Tree Algorithms**: Tree traversal and balancing techniques

## Implementation Details

All implementations prioritize:
- **Clarity**: Code is well-commented and easy to understand
- **Efficiency**: Algorithms follow standard time complexity expectations
- **Modularity**: Components are separated and reusable
- **ES6+ Features**: Modern JavaScript syntax and features

## Individual Documentation

Each subdirectory contains detailed documentation about the specific implementation:

- [Hash Maps Documentation](./hash-maps/README.md)
- [Recursion Documentation](./recursion/README.md) 
- [Binary Search Trees Documentation](./binary-search-trees/README.md)
- [Linked Lists Documentation](./linked-lists/README.md)

## Contributing

This is a learning repository. Feel free to:
- Add more data structures
- Implement additional algorithms
- Improve existing implementations
- Add more comprehensive tests
- Enhance documentation

## License

This project is for educational purposes. Feel free to use and modify as needed for learning.
