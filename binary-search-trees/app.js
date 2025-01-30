import { Tree } from "./components/Tree.js";

const prettyPrint = (node, prefix = "", isLeft = true) => {
	if (node === null) {
		return;
	}
	if (node.right !== null) {
		prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
	}
	console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
	if (node.left !== null) {
		prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
	}
};
const unSortedArr = [12, 6, 3, 1, 8, 233, 47];
const numbersArr = [1, 2, 3, 4, 5, 6, 7]
const newTree = new Tree(unSortedArr);


// console.log(newTree.buildTree())

prettyPrint(newTree.root)