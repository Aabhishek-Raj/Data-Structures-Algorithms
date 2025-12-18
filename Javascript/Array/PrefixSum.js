// 303 Range Sum Query - immutable ==>

class NumArray {
    
    constructor(nums) {
        this.prefixArray = [nums[0]]
        
        for(let i = 1; i < nums.length; i++) {
            this.prefixArray[i] = this.prefixArray[i - 1] + nums[i]
        }
    }
    
    sumRange(left, right) {
        if(left == 0) return this.prefixArray[right]
        return this.prefixArray[right] - this.prefixArray[left - 1]
    }
}

//560 Subarray sum equals K

function subArrayFromEqualK(nums, k) {
    let count = 0;
    let sum = 0;
    const map = new Map();

    // Base case: sum 0 occurs once
    map.set(0, 1);

    for (let num of nums) {
        sum += num;

        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        console.log(map)

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}

console.log(subArrayFromEqualK([1,2,3], 3))
// const obj = new NumArray([-2, 0, 3, -5, 2, -1])
// console.log(obj.sumRange(0, 2))
// console.log(obj.sumRange(2, 5))
// console.log(obj.sumRange(0, 5))

const arr = [1,2,3]
const prefixSum = [1, 3, 6]