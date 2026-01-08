
// 268. Missing Number
function missingNumber(nums: number[]): number {
    let i = 0
    while(i < nums.length) {
        let correctIndex = nums[i]

        // array indices go from 0 to n-1
        if(nums[i] < nums.length && nums[i] !== nums[correctIndex]) {
            let temp = nums[i]
            nums[i] = nums[correctIndex]
            nums[correctIndex] = temp
        } else {
            i++
        }
    }
   
    let j = 0
    while(j < nums.length) {
        if(nums[j] !== j) {
            return j
        }
        j++
    }
    return j
}


const numsArray = [4, 0, 2, 1]

console.log(missingNumber(numsArray)) // Output: 8