import { Node } from "./Node.js";

export class Tree {
	constructor(array) {
		this.array = array;
      Tree.mergeSort(this.array, 0, this.array.length - 1);
		this.root = this.buildTree(0, array.length -1);
	}

   static mergeSort(arr, left, right) {
      if (left >= right) {
         return;
      }
   
      const mid = Math.floor((right + left ) / 2);
   
      
      Tree.mergeSort(arr, left, mid);
      
      Tree.mergeSort(arr, mid + 1, right);
      
      Tree.merge(arr, left, mid, right);
   }

   static merge(arr, left, mid, right) {
      // Slice arrays
      const leftArr = arr.slice(left, mid + 1);
      const rightArr = arr.slice(mid + 1, right + 1);
   
      let i = 0, j = 0, k = left;
   
      while (i < leftArr.length && j < rightArr.length) {
         arr[k++] = (leftArr[i] < rightArr[j]) ? leftArr[i++] : rightArr[j++];
      }
   
      while (i < leftArr.length) arr[k++] = leftArr[i++];
      while (j < rightArr.length) arr[k++] = rightArr[j++];
   }

   buildTree(start, end) {
      if (start > end) return null;
   
      let mid = start + Math.floor((end - start) / 2);
      let root = new Node(this.array[mid]);
   
      root.left = this.buildTree(start, mid - 1);
      root.right = this.buildTree(mid + 1, end);
   
      return root;
   }
}