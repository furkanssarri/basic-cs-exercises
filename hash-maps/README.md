# Hash Maps Implementation

A comprehensive HashMap data structure implementation in JavaScript, featuring dynamic resizing, collision handling, and efficient key-value operations.

## Overview

This implementation provides a fully functional hash map (hash table) with automatic resizing capabilities. The HashMap uses separate chaining to handle hash collisions and maintains a load factor of 0.75 to ensure optimal performance.

## Features

### Core Functionality
- **Dynamic Buckets**: Automatically creates and manages bucket arrays
- **Hash Function**: Uses prime number-based hashing for even distribution
- **Collision Handling**: Implements separate chaining using arrays
- **Load Factor Management**: Maintains 0.75 load factor with automatic resizing
- **CRUD Operations**: Complete Create, Read, Update, Delete functionality

### Methods Implemented

#### Static Methods
- `createBuckets(amount)` - Creates an array of empty buckets
- `hash(key, capacity)` - Generates hash code using prime number algorithm

#### Instance Methods
- `set(key, value)` - Insert or update key-value pair
- `get(key)` - Retrieve value by key
- `has(key)` - Check if key exists
- `remove(key)` - Delete key-value pair
- `length()` - Get total number of entries
- `clear()` - Remove all entries
- `keys()` - Get array of all keys
- `values()` - Get array of all values
- `entries()` - Get array of all key-value pairs
- `bucket(key)` - Find bucket for given key
- `entry(bucket, key)` - Find entry within bucket
- `resize()` - Double capacity and rehash all entries
- `countSize()` - Track size and trigger resize when needed

## Technical Details

### Hash Function
The implementation uses a prime number-based hash function for optimal distribution:

```javascript
static hash(key, capacity) {
    const primeNum = 31;
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
        hashCode = (primeNum * hashCode + key.charCodeAt(i)) % capacity;
    }
    return hashCode;
}
```

### Load Factor Management
- **Initial Capacity**: 16 buckets
- **Load Factor Threshold**: 0.75 (75%)
- **Resize Strategy**: Double the capacity when threshold is exceeded
- **Rehashing**: All existing entries are rehashed after resizing

### Collision Resolution
Uses separate chaining where each bucket is an array that can hold multiple entries with the same hash value.

## Usage Examples

### Basic Operations
```javascript
import { HashMap } from "./components/HashMap.js";

const hashMap = new HashMap();

// Set key-value pairs
hashMap.set('apple', 'red');
hashMap.set('banana', 'yellow');
hashMap.set('grape', 'purple');

// Get values
console.log(hashMap.get('apple')); // 'red'

// Check existence
console.log(hashMap.has('banana')); // true

// Get all keys
console.log(hashMap.keys()); // ['apple', 'banana', 'grape']

// Remove entry
hashMap.remove('banana');
console.log(hashMap.length()); // 2
```

### Advanced Usage
```javascript
// The implementation handles automatic resizing
// Add many items to trigger resize at 75% capacity
for (let i = 0; i < 20; i++) {
    hashMap.set(`key${i}`, `value${i}`);
}

// Get all entries as key-value objects
const allEntries = hashMap.entries();
console.log(allEntries);

// Clear all entries
hashMap.clear();
console.log(hashMap.length()); // 0
```

## Time Complexity

| Operation | Average Case | Worst Case |
|-----------|-------------|------------|
| Set       | O(1)        | O(n)       |
| Get       | O(1)        | O(n)       |
| Has       | O(1)        | O(n)       |
| Remove    | O(1)        | O(n)       |
| Keys      | O(n)        | O(n)       |
| Values    | O(n)        | O(n)       |
| Entries   | O(n)        | O(n)       |

*Note: Worst case O(n) occurs when all keys hash to the same bucket*

## Space Complexity
- **Overall**: O(n) where n is the number of key-value pairs
- **Bucket Array**: O(capacity) where capacity starts at 16 and doubles as needed

## Running the Example

```bash
node hash-maps/app.js
```

This will run the demonstration script that:
1. Creates a new HashMap instance
2. Adds multiple key-value pairs (including some in Turkish)
3. Demonstrates automatic resizing when load factor exceeds 0.75
4. Displays the final bucket structure

## Implementation Notes

### Known Issues
- The `remove()` method has a bug in the splice operation and needs rework
- The implementation could benefit from more comprehensive error handling

### Potential Improvements
- Add iterator support for for...of loops
- Implement hash function alternatives
- Add serialization/deserialization methods
- Improve memory efficiency for sparse data
- Add comprehensive unit tests

## File Structure

```
hash-maps/
├── README.md           # This documentation
├── app.js             # Usage examples and demonstrations
└── components/
    └── HashMap.js     # Main HashMap class implementation
```
