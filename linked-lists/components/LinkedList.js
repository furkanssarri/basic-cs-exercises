import { Node } from "./Node.js";

export class LinkedList {
	constructor() {
		this._head = null;
	}

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

	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this._head;
		this._head = newNode;
	}

	getSize() {
		let total = 0;
		let current = this._head;
		while (current) {
			total++;
			current = current.next;
		}
		return total;
	}

	getHead() {
		return this._head;
	}

	getTail() {
		let current = this._head;
		if (!current) return null;
		while (current.next) {
			current = current.next;
		}
		return current;
	}

	atIndex(index) {
		if (index < 0 || index >= this.getSize()) return null;
		let current = this._head;
		let count = 0;
		while (current) {
			if (count === index) {
				return current;
			}
			current = current.next;
			count++;
		}
		return null;
	}

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

   pop() {
      let current = this.getHead();
      const tail = this.getTail();
      let previous = null;
      while (current.next) {
         previous = current;
         current = current.next;
      }
      previous.next = null;
      return tail;
	}

	contains(value) {
		let current = this._head;
		while (current) {
			if (current.value === value) {
				return true;
			}
			current = current.next;
		}
		return false;
	}

	find(value) {
		let current = this._head;
		let count = 0;
		while (current) {
			if (current.value === value) {
				return count;
			}
			current = current.next;
			count++;
		}
		return null;
	}

	toString() {
		let current = this._head;
		let result = "";
		while (current) {
			result += `(${current.value}) -> `;
			current = current.next;
		}
		result += "null";
		return result;
	}
}
