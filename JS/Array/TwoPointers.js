
// const res = moveZeroes()
const res = withMostWater()
console.log(res)


// 283. Move Zeroes ==>

function moveZeroes() {
    const nums = [0,1,0,3,12]

    let left = 0;

    for(let r = 0; r < nums.length; r++) {
        if(nums[r] !== 0) {
            let temp = nums[left]
            nums[left] = nums[r]
            nums[r] = temp
            left++
        }
    }
    return nums  
}

// 11. container with most water ==> 

function withMostWater() {
    const height = [1,8,6,2,5,4,8,3,7]

    let right = height.length - 1
    let left = 0
    let maxArea = 0

    while(right > left) {
        let area = Math.min(height[right], height[left]) * (right - left)
        if(height[left] > height[right]) {
            right--
        } else {
            left++
        }
        maxArea = Math.max(maxArea, area)
    }
    return maxArea
}