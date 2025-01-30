export class HashMap {
	constructor() {
		this.loadFactor = 0.75;
		this.capacity = 16;
		this.sizeCount = 0;
		this.buckets = HashMap.createBuckets(this.capacity);
	}

	static createBuckets(amount) {
		const arr = [];
		for (let i = 0; i < amount; i++) {
			arr.push([]);
		}

		return arr;
	}

	static hash(key, capacity) {
		const primeNum = 31;
		let hashCode = 0;
		for (let i = 0; i < key.length; i++) {
			hashCode = (primeNum * hashCode + key.charCodeAt(i)) % capacity;
		}

		return hashCode;
	}

   // Determine bucket index
   bucket(key) {
		const hash = HashMap.hash(key, this.buckets.length);
		return this.buckets[hash];
	}

   // Find entry key in bucket
   entry (bucket, key) {
      for (const entry of bucket) {
         if (entry.key === key) {
            return entry;
         }
      }
      return null;
   }

	resize() {
		const oldArr = this.entries();
      this.capacity *= 2;
		this.buckets = HashMap.createBuckets(this.capacity);
      oldArr.forEach(element => {
         this.set(element.key, element.value, true)
      });
      
      
	}

	countSize() {
      this.sizeCount++;
		let load = this.sizeCount / this.capacity;
		if (load >= this.loadFactor) {
         this.resize();
		}

      return this.sizeCount;
	}



	set(key, value, isResizing = false) {
      const bucket = this.bucket(key);
      const entry = this.entry(bucket, key);
      if (entry) {
         entry.value = value;
         return `Changed entry value to ${value}`;
      }
		bucket.push({ key, value });
      if (!isResizing) {
         this.countSize();
      }

      return `Added entry with key: ${key}, value: ${value}.`;
	}

	get(key) {
		const bucket = this.bucket(key);
      const entry = this.entry(bucket, key);
      if (entry) {
         return entry.value;
      }
	}

	has(key) {
		const item = this.get(key);
		return !item ? false : true;
	}

   // NEEDS REWORK
	remove(key) {
		for (const bucket of this.buckets) {
         for (const entry of bucket) {
            if (entry.key === key) {
               bucket.splice(entry);
               this.sizeCount--;
               return true;
            }
         }
      }
	}

	length() {
		let keyCount = 0;
		for (const bucket of this.buckets) {
         for (const entry of bucket) {
            if (entry) {
               keyCount++;
            }
         }
      }

      return keyCount;
	}

	clear() {
		for (const bucket of this.buckets) {
         for (const entry of bucket) {
            bucket.splice(entry);
         }
      }
      this.sizeCount = 0;
      return `all entries cleared.`;
	}

	keys() {
		const keysArr = [];
		for (const bucket of this.buckets) {
         for (const entry of bucket) {
            if (entry) {
               keysArr.push(entry.key);
            }
         }
      }

		return keysArr;
	}

	values() {
		const valuesArr = [];
		for (const bucket of this.buckets) {
         for (const entry of bucket) {
            valuesArr.push(entry.value);
         }
      }

		return valuesArr;
	}

	entries() {
		const entriesArr = [];
		for (const bucket of this.buckets) {
			if (Array.isArray(bucket) && bucket.length === 0) {
				continue;
			}
			for (const entry of bucket) {
				entriesArr.push(entry);
			}
		}
		// console.log(entriesArr);
		return entriesArr;
	}


}
