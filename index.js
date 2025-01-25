import { LinkedList } from "./components/LinkedList.js";

const newList = new LinkedList();
newList.append("dog");
newList.prepend("snake");
newList.append("cat");
newList.append("lion");
newList.append("bison");


// console.log(newList.pop());
newList.insertAt("elephant", 2);
console.log(newList.toString());



