const res = maximumSubarray()
console.log(res)


// 53. Maximum Subarray ==>

function maximumSubarray() {
    const nums = [5,4,-1,7,8]
    
    let maxSum = nums[0]
    let sum = nums[0]
    for(let i = 1; i < nums.length; i++) {
        sum += nums[i]
        sum = Math.max(sum, nums[i])
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum
}