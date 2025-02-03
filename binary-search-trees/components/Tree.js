import { Node } from "./Node.js";

export class Tree {
	constructor(array) {
		this.array = array;
		this.root = null;
		this.checkDuplicates(this.array);
	}

	static mergeSort(arr, left, right) {
		if (left >= right) {
			return;
		}

		const mid = Math.floor((right + left) / 2);

		Tree.mergeSort(arr, left, mid);
		Tree.mergeSort(arr, mid + 1, right);
		Tree.merge(arr, left, mid, right);
	}

	static merge(arr, left, mid, right) {
		// Slice arrays
		const leftArr = arr.slice(left, mid + 1);
		const rightArr = arr.slice(mid + 1, right + 1);

		let i = 0,
			j = 0,
			k = left;

		// Comparisons
		while (i < leftArr.length && j < rightArr.length) {
			arr[k++] = leftArr[i] < rightArr[j] ? leftArr[i++] : rightArr[j++];
		}
		while (i < leftArr.length) arr[k++] = leftArr[i++];
		while (j < rightArr.length) arr[k++] = rightArr[j++];
	}

	checkDuplicates(arr) {
		const newSet = new Set(arr);
		if (newSet.size === arr.length) {
			Tree.mergeSort(this.array, 0, this.array.length - 1);
			this.root = this.buildTree(0, this.array.length - 1);
			return true;
		}
		this.removeDuplicates(newSet);
		return false;
	}

	removeDuplicates(set) {
		this.array = Array.from(set);
		Tree.mergeSort(this.array, 0, this.array.length - 1);
		this.root = this.buildTree(0, this.array.length - 1);
	}

	buildTree(start, end) {
		if (start > end) return null;

		let mid = start + Math.floor((end - start) / 2);
		let root = new Node(this.array[mid]);

		root.left = this.buildTree(start, mid - 1);
		root.right = this.buildTree(mid + 1, end);

		return root;
	}

	// Inorder Traversal (Left -> Root -> Right)
	inorder(node = this.root, arr = []) {
		if (!node) return arr;
		this.inorder(node.left, arr);
		arr.push(node.data);
		this.inorder(node.right, arr);
		return arr;
	}

	// Preorder Traversal (Root -> Left -> Right)
	preorder(node = this.root, arr = []) {
		if (!node) return arr;
		arr.push(node.data);
		this.preorder(node.left, arr);
		this.preorder(node.right, arr);
		return arr;
	}

	// Postorder Traversal (Left -> Right -> Root)
	postorder(node = this.root, arr = []) {
		if (!node) return arr;
		this.postorder(node.left, arr);
		this.postorder(node.right, arr);
		arr.push(node.data);
		return arr;
	}

	insert(value, node = this.root) {
		if (node === null) {
			console.log(`No current root. Creating new Node with the value ${value}...`);
         this.array.push(value);
         Tree.mergeSort(this.array, 0, this.array.length - 1);
			return new Node(value);
		}

		// Check for duplicates
		if (value === node.data) {
			console.log(`Duplication detected, skipping insertion...`);
			return node;
		}

		if (value < node.data) {
			console.log(`The value ${value} goes into left subtree.`);
			node.left = this.insert(value, node.left);
		} else if (value > node.data) {
			console.log(`The value ${value} goes into right subtree.`);
			node.right = this.insert(value, node.right);
		}

		return node;
	}

	getPredecessor(curr) {
		curr = curr.left;
		while (curr !== null && curr.right !== null) {
			curr = curr.right;
		}
		return curr;
	}

	getSuccessor(curr) {
		if (curr.right === null) return this.getPredecessor(curr);
		curr = curr.right;
		while (curr !== null && curr.left !== null) {
			curr = curr.left;
		}
		return curr;
	}

	deleteItem(value, node = this.root) {
		if (node === null) {
			return node;
		}
		if (node.data > value) {
			node.left = this.deleteItem(value, node.left);
		} else if (node.data < value) {
			node.right = this.deleteItem(value, node.right);
		} else {
			// If node value matches with the value
			if (node.left === null) {
				return node.right;
			}
			if (node.right === null) {
				return node.left;
			}
			const successorNode = this.getSuccessor(node);
			if (successorNode !== null) {
				console.log(`Deleting ${value}.`);
				node.data = successorNode.data;
				node.right = this.deleteItem(successorNode.data, node.right);
			}
		}

		return node;
	}

	find(value, node = this.root) {
		if (node === null) {
			return null;
		}
		if (value === node.data) {
			return node;
		}
		if (value < node.data) {
			return this.find(value, node.left);
		} else if (value > node.data) {
			return this.find(value, node.right);
		}
		return null;
	}

	getLevelOrderData(root, level, result) {
		if (root === null) return;

		if (result.length <= level) {
			result.push([]);
		}

		// Append the current node.data to the current level
		result[level].push(root.data);

		// Recur children
		this.getLevelOrderData(root.left, level + 1, result);
		this.getLevelOrderData(root.right, level + 1, result);
	}

	levelOrder(root) {
		const result = [];
		this.getLevelOrderData(root, 0, result);
		return result;
	}

	getSubtreeHeight(node) {
		if (node === null) return -1;
		return (
			Math.max(
				this.getSubtreeHeight(node.left),
				this.getSubtreeHeight(node.right)
			) + 1
		);
	}

	height(value, node = this.root) {
		if (node === null) return -1;

		if (node.data === value) {
			return this.getSubtreeHeight(node);
		}

		let leftHeight = this.height(value, node.left);
		let rightHeight = this.height(value, node.right);

		return Math.max(leftHeight, rightHeight);
	}

	depth(value, node = this.root) {
		if (node === null) return -1;

		let dist = -1;
		if (
			node.data === value ||
			(dist = this.depth(value, node.left)) >= 0 ||
			(dist = this.depth(value, node.right)) >= 0
		) {
			return dist + 1;
		}
		return dist;
	}

	isBalanced(node = this.root) {
		if (node === null) return true;

		let leftHeight = this.getSubtreeHeight(node.left);
		let rightHeight = this.getSubtreeHeight(node.right);

		if (Math.abs(leftHeight - rightHeight) > 1) {
			return false;
		}

		return this.isBalanced(node.left) && this.isBalanced(node.right);
	}

	rebalance() {
		if (this.isBalanced()) {
			console.log("The tree is balanced. Not proceeding...");
			return;
		}
		console.log("The tree is unbalanced. Proceeding with rebalancing...");
		this.array = this.inorder();
      Tree.mergeSort(this.array, 0, this.array.length - 1);
		this.root = this.buildTree(0, this.array.length - 1);
	}
}
