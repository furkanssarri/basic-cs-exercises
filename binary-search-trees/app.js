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
const unSortedArr = [12, 6, 3, 1, 8, 6, 96, 47, 10, 75, 72, 32, 31, 44, 43, 18];
const numbersArr = [1, 2, 3, 4, 5, 6, 7];
const newTree = new Tree(unSortedArr);

const levelOrder = [ // A referrence for the level order search result with the current unsorted input.
	[31],
	[8, 47],
	[3, 12, 43, 75],
	[1, 6, 10, 18, 32, 44, 72, 96],
];

newTree.insert(100);
newTree.rebalance();
newTree.insert(101);
newTree.rebalance();
newTree.insert(30);
newTree.rebalance();
newTree.insert(102);
newTree.rebalance();
newTree.insert(103);
newTree.rebalance();
newTree.insert(105);
newTree.rebalance();

prettyPrint(newTree.root);



