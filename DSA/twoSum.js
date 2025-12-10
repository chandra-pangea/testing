function targetSum(arr, target) {
    const hashMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let searchFor = target - element;

        if (hashMap.has(searchFor)) {
            return [hashMap.get(searchFor), i];
        }

        hashMap.set(element, i);
    }

    return [];
}

console.log(targetSum([1, 2, 3, 4, 5, 0], 9));  // Output: [3, 4]
