function fib(num) {
   if (num == 1) return 0;
   if (num == 2) return 1;

   return fib(num - 1) + fib(num - 2);
}

// console.log(fib(8));

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

const arr = [105, 79, 100, 110];

console.log(mergeSort(arr));