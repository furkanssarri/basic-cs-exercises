# Recursion Exercises

A collection of classic recursive algorithm implementations demonstrating fundamental recursive thinking and problem-solving techniques.

## Overview

This module contains implementations of two fundamental recursive algorithms that showcase different aspects of recursive programming:

1. **Fibonacci Sequence** - Demonstrates basic recursion with overlapping subproblems
2. **Merge Sort** - Demonstrates divide-and-conquer recursive strategy

## Algorithms Implemented

### 1. Fibonacci Sequence

Calculates the nth Fibonacci number using pure recursion.

#### Fibonacci Implementation

```javascript
function fib(num) {
  if (num == 1) return 0;
  if (num == 2) return 1;

  return fib(num - 1) + fib(num - 2);
}
```

#### Fibonacci Characteristics

- **Base Cases**: F(1) = 0, F(2) = 1
- **Recursive Case**: F(n) = F(n-1) + F(n-2)
- **Time Complexity**: O(2^n) - exponential due to repeated calculations
- **Space Complexity**: O(n) - due to call stack depth

#### Fibonacci Sequence

```txt
F(1) = 0
F(2) = 1
F(3) = 1
F(4) = 2
F(5) = 3
F(6) = 5
F(7) = 8
F(8) = 13
```

### 2. Merge Sort

A divide-and-conquer sorting algorithm that recursively splits arrays and merges them in sorted order.

#### Merge Sort Implementation

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sortedArr = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}
```

#### Merge Sort Characteristics

- **Base Case**: Array with length ≤ 1 is already sorted
- **Recursive Case**: Split array in half, sort each half, merge results
- **Time Complexity**: O(n log n) - optimal for comparison-based sorting
- **Space Complexity**: O(n) - for temporary arrays during merging

#### Algorithm Steps

1. **Divide**: Split the array into two halves
2. **Conquer**: Recursively sort both halves
3. **Combine**: Merge the sorted halves back together

## Usage Examples

### Fibonacci Example

```javascript
console.log(fib(1)); // 0
console.log(fib(2)); // 1
console.log(fib(8)); // 13
console.log(fib(10)); // 34
```

### Merge Sort Example

```javascript
const unsortedArray = [105, 79, 100, 110];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // [79, 100, 105, 110]

const largerArray = [64, 34, 25, 12, 22, 11, 90];
console.log(mergeSort(largerArray)); // [11, 12, 22, 25, 34, 64, 90]
```

## Running the Examples

```bash
node recursion/app.js
```

This will execute the merge sort example with the array `[105, 79, 100, 110]` and display the sorted result.

## Recursive Concepts Demonstrated

### 1. Base Cases

Every recursive function has one or more base cases that stop the recursion:

- **Fibonacci**: Numbers 1 and 2 have predefined values
- **Merge Sort**: Arrays with length ≤ 1 are considered sorted

### 2. Recursive Cases

The function calls itself with modified parameters:

- **Fibonacci**: Calls itself with `num-1` and `num-2`
- **Merge Sort**: Calls itself with left and right halves of the array

### 3. Problem Decomposition

- **Fibonacci**: Breaks down F(n) into smaller Fibonacci numbers
- **Merge Sort**: Breaks down sorting a large array into sorting smaller arrays

### 4. Combining Results

- **Fibonacci**: Adds the results of the two recursive calls
- **Merge Sort**: Merges the results of sorting the two halves

## Performance Analysis

### Fibonacci (Naive Implementation)

- **Pros**: Simple and intuitive implementation
- **Cons**: Exponential time complexity due to repeated calculations
- **Optimization**: Could be improved with memoization (Dynamic Programming)

### Merge Sort

- **Pros**: Stable sort, guaranteed O(n log n) performance, works well with large datasets
- **Cons**: Requires additional memory for temporary arrays
- **Use Cases**: When stable sorting is required, or when dealing with linked lists

## Learning Objectives

These implementations help understand:

1. **Recursive Function Structure**: Base cases and recursive cases
2. **Call Stack Management**: How recursive calls build up and resolve
3. **Time/Space Trade-offs**: Different recursive approaches have different complexities
4. **Divide and Conquer**: Breaking problems into smaller, manageable pieces
5. **Algorithm Analysis**: Understanding when recursion is appropriate

## Potential Improvements

### Fibonacci Optimizations

```javascript
// Memoized version for better performance
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return n === 1 ? 0 : 1;

  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}
```

### Additional Recursive Algorithms

Future additions could include:

- Tower of Hanoi
- Binary tree traversals
- Permutation generation
- Backtracking algorithms (N-Queens, Sudoku solver)

## File Structure

```txt
recursion/
├── README.md          # This documentation
└── app.js            # Fibonacci and merge sort implementations
```
